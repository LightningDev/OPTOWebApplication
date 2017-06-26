import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { PalletService } from '../../shared/services/pallet.service';
import 'style-loader!./buttons.scss';

@Component({
  selector: 'pallet',
  styleUrls: ['./modals.scss'],
  templateUrl: './pallet.html',
})

export class Pallet implements AfterViewInit{

	currentRadio:string='';
	inputPallet:string='';
	inputBinLocation:string='';
	inputJob:string='';

	constructor(private service: PalletService) {
		
	}

	ngAfterViewInit(){
		if(screen.width > 420){
      		document.getElementsByClassName('col-xs-6')['0'].style.width = '150px';
      		document.getElementsByClassName('col-xs-6')['1'].style.width = '150px';
      		document.getElementsByClassName('form-group')['0'].style.width = '300px';
      		document.getElementsByClassName('form-group')['1'].style.width = '300px';
      		document.getElementsByClassName('widgets')['0'].style.width = '400px';
    	}
  	}

	radio_stock(event) {    
	    this.currentRadio = event.currentTarget.defaultValue;
	    if(this.currentRadio=="PalletToLocation"){
	    	 document.getElementById('PalletToLocation').style.display = 'block';
             document.getElementById('JobToPallet').style.display = 'none';
	     }

	     if(this.currentRadio=="JobToPallet"){
	     	 document.getElementById('PalletToLocation').style.display = 'none';
             document.getElementById('JobToPallet').style.display = 'block';
	     }
  	}



	button_OUT(event) {
		//alert("OUT CLICKED");
		let json = {
			"pallet_code": this.inputPallet,
			"bin_location" : this.inputBinLocation,
			"job":this.inputJob,
			"action" : "0"
		} 
		this.service.sendPallet(json).subscribe(res => {
			if(this.inputBinLocation == "" && this.currentRadio == "PalletToLocation"){
				alert("Input location field cannot be empty");
			}else if(this.inputJob == "" && this.currentRadio == "JobToPallet"){
				alert("Input job field cannot be empty");
			}else{
	    		alert(res.json().message);
				this.inputJob="";
				this.inputBinLocation="";
			}
    	})

	}

	button_IN(event) {
		//alert("IN CLICKED");
		let json = {
			"pallet_code": this.inputPallet,
			"bin_location" : this.inputBinLocation,
			"job":this.inputJob,
			"action" : "1"

		} 
		this.service.sendPallet(json).subscribe(res => {
    		if(this.inputBinLocation == "" && this.currentRadio == "PalletToLocation"){
				alert("Input location field cannot be empty");
			}else if(this.inputJob == "" && this.currentRadio == "JobToPallet"){
				alert("Input job field cannot be empty");
			}else{
	    		alert(res.json().message);
				this.inputJob="";
				this.inputBinLocation="";
			}
    	})

	}

}
