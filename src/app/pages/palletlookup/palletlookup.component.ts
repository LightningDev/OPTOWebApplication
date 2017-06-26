import {Component, ViewChild} from '@angular/core';
import { PalletService } from '../../shared/services/pallet.service';
import { ModalDirective } from 'ng2-bootstrap';
import 'style-loader!./buttons.scss';

@Component({
  selector: 'pallet',
  styleUrls: ['./modals.scss'],
  templateUrl: './pallet.html',
})

export class PalletLookUp {

	currentRadio:string='';
	inputPallet:string='';
	inputBinLocation:string='';
	inputJob:string='';

	@ViewChild('childModal') childModal: ModalDirective;

	constructor(private service: PalletService) {
		
	}

	showChildModal(): void {
		this.childModal.show();
	}

	hideChildModal(): void {
		this.childModal.hide();
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
    		alert(res.json().message);
			this.inputJob="";
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
    		alert(res.json().message);
    		this.inputJob="";
    	})

	}

}
