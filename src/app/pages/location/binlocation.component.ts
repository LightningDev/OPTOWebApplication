import {Component, ViewChild} from '@angular/core';
import { BinLocationService } from '../../shared/services/binlocation.service';
import { ModalDirective } from 'ng2-bootstrap';
import 'style-loader!./buttons.scss';

@Component({
  selector: 'bin-location',
  styleUrls: ['./modals.scss'],
  templateUrl: './binlocation.html',
})

export class BinLocation {

	@ViewChild('childModal') childModal: ModalDirective;

	constructor(private service: BinLocationService) {
		
	}

	showChildModal(): void {
		this.childModal.show();
	}

	hideChildModal(): void {
		this.childModal.hide();
	}

	button_OUT(event) {
		//alert("OUT CLICKED");
		let json = {
			"material_code" : "",
			"barcode": this.inputBarcode,
			"bin_location" : this.inputBinLocation,
			"action" : "0"
		} 
		this.service.sendBinLocation(json).subscribe(res => {
    		alert(res.json().message);

    	})
	}

	button_IN(event) {
		//alert("IN CLICKED");
		let json = {
			"material_code" : "",
			"barcode": this.inputBarcode,
			"bin_location" : this.inputBinLocation,
			"action" : "1"

		} 
		this.service.sendBinLocation(json).subscribe(res => {
    		alert(res.json().message);
    		
    	})
	}

}
