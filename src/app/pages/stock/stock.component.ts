import {Component, ViewChild} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { StockService } from '../../shared/services/stock.service';
import { ModalDirective } from 'ng2-bootstrap';
import 'style-loader!./buttons.scss';

import {Router} from '@angular/router'
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'stock',
  styleUrls: ['./modals.scss'],
  templateUrl: './stock.html',
})

export class Stock {

	public form:FormGroup;
	public stockTake:boolean = false;
	public stockInOut:boolean = false;
	public stockAdjustment:boolean = false;

	@ViewChild('childModal') childModal: ModalDirective;

	constructor(fb:FormBuilder, private auth: AuthService, private router:Router) {
    this.form = fb.group({
      'stockTake': false,
      'stockInOut': false
      'stockAdjustment': false
    });

    this.stockTake = this.form.controls['stockTake'];
    this.stockInOut = this.form.controls['stockInOut'];
    this.stockAdjustment = this.form.controls['stockAdjustment'];
  }


	// showChildModal(): void {
	// 	this.childModal.show();
	// }

	// hideChildModal(): void {
	// 	this.childModal.hide();
	// }

	// button_OUT(event) {
	// 	//alert("OUT CLICKED");
	// 	let json = {
	// 		"material_code" : "",
	// 		"barcode": this.inputBarcode,
	// 		"bin_location" : this.inputBinLocation,
	// 		"action" : "0"
	// 	} 
	// 	this.service.sendBinLocation(json).subscribe(res => {
 //    		alert(res.json().message);

 //    	})
	// }

	// button_IN(event) {
	// 	//alert("IN CLICKED");
	// 	let json = {
	// 		"material_code" : "",
	// 		"barcode": this.inputBarcode,
	// 		"bin_location" : this.inputBinLocation,
	// 		"action" : "1"

	// 	} 
	// 	this.service.sendBinLocation(json).subscribe(res => {
 //    		alert(res.json().message);
    		
 //    	})
	// }

}
