import {Component, ViewChild, FORM_DIRECTIVES, NgFor} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { DivisionService } from '../../shared/services/division.service';
import { EmployeeService } from '../../shared/services/employee.service';
import { MaterialService } from '../../shared/services/material.service';
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

	public inputBarcode:string='';
	public currmat:string='';
	public stockType:string='';
	
	public success:string='';
	public noti:string='';
	public empNoti:string='';
	public stockNoti:string='';
	// public inputCurrent:number;
	// public inputOnHand:number;

	public divisionsList:Object;
	public employeeList:Object;


	public stockTake:boolean = false;
	public stockInOut:boolean = false;
	public stockAdjustment:boolean = false;


	@ViewChild('childModal') childModal: ModalDirective;

	constructor(fb:FormBuilder, 
		private auth: AuthService, 
		private router:Router, 
		private divisionservice:DivisionService, 
		private employeeservice:EmployeeService, 
		private materialservice:MaterialService) {

    this.form = fb.group({
      'stockTake': false,
      'stockInOut': false,
      'stockAdjustment': false,
    });


    this.stockTake = this.form.controls['stockTake'];
    this.stockInOut = this.form.controls['stockInOut'];
    this.stockAdjustment = this.form.controls['stockAdjustment'];

 
  	}

  	ngOnInit() {

    	this.divisionservice.getDivision().subscribe(res => {
        //alert(JSON.stringify(res.json()));
        this.divisionsList = res.json()["items"];
        // console.log(this.divisions);
        // debugger;
    	})

    	this.employeeservice.getEmployee().subscribe(res => {
        //alert(JSON.stringify(res.json()));
        this.employeeList = res.json()["employees"];
        // console.log(this.divisions);
        // debugger;
    	})

  	}

	checkMaterialCode(inputBarcode): void{
	
		if(inputBarcode==" " || inputBarcode=="" || inputBarcode==null){
			this.inputBarcode = inputBarcode;
			this.noti = "(BarCode required)";
			this.success ="";
			return;
		}else{
			this.inputBarcode = inputBarcode;
			this.materialservice.getMaterialDetails(this.inputBarcode).subscribe(res =>{
				if(res.json()["items"][0]["ID"]==" " || res.json()["items"][0]["ID"]=="" || res.json()["items"][0]["ID"]==null){
					this.noti= "BarCode is invalid please try another one";
					this.success ="";
				}else{
	    		this.currmat = res.json()["items"][0]["cash_p_m"];
	    		this.noti= "";
	    		this.success ="valid";
	    		debugger;
	    		let abc = this.vc;
	    		}
			})
		}
  	}

  	process(event): void{
  // 		if(this.divisionCode==" " || this.divisionCode=="" || this.divisionCode==null){
		// 	this.divNoti = "(Please select division)";
		// 	return;
		// }
		if(this.divisionCode==null||this.divisionCode=='undefined'||this.divisionCode==''||this.divisionCode==""){
			this.divisionCode='';
		}else{
			console.log("divisionCode");
		}

		if(this.employeeCode==null||this.employeeCode=='undefined'||this.employeeCode==''){
			this.employeeCode='';
			this.empNoti='(Please select an employee)';
		}else{
			console.log("employeeCode");
			this.empNoti='';
		}


		// if(this.stockTake.value==false && this.stockInOut.value==false && this.stockAdjustment.value==false){
		// 	this.stockNoti='(Please select stock type)';
		// 	return;
		// }else{
			
		// 	if(this.stockInOut.value!=false && this.stockType!=this.stockInOut.value){
		// 		this.stockType=this.stockInOut.value;
		// 		console.log('abc');
		// 		console.log(this.stockInOut.value);
		// 	}
		// 	else if(this.stockAdjustment.value!=false && this.stockType!=this.form.controls['stockAdjustment']){
		// 		this.stockType=this.stockAdjustment.value;
		// 		console.log('xyz');
		// 		console.log(this.stockAdjustment.value);
		// 	}
		// 	else if(this.stockTake.value!=false && this.stockType!=this.form.controls['stockTake']){
		// 		this.stockType=this.stockTake.value;
		// 		console.log('qwe');
		// 		console.log(this.stockTake.value);
		// 	}
		// }
		// console.log("-----");
		// console.log(this.stockType!==this.stockTake.value);
		// console.log(this.stockType!==this.stockAdjustment.value);
		// console.log(this.stockType!==this.stockInOut.value);
		// console.log(this.stockType);
		// console.log(this.stockTake.value);
		// console.log(this.stockInOut.value);
		// console.log(this.stockAdjustment.value);
		debugger;
	}


}
