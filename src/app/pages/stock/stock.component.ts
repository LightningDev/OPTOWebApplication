import {Component, ViewChild} from '@angular/core';
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
	public noti:string='';
	public success:string='';
	// public inputCurrent:number;
	// public inputOnHand:number;

	public division:Object;
	public employee:Object;
	public emplist:Object;

	public check:boolean = false;
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
      'stockInOut': false
      'stockAdjustment': false
    });


    this.stockTake = this.form.controls['stockTake'];
    this.stockInOut = this.form.controls['stockInOut'];
    this.stockAdjustment = this.form.controls['stockAdjustment'];

 
  	}

  	ngOnInit() {

    	this.divisionservice.getDivision().subscribe(res => {
        //alert(JSON.stringify(res.json()));
        this.divisions = res.json()["items"];
        // console.log(this.divisions);
        // debugger;
    	})

    	this.employeeservice.getEmployee().subscribe(res => {
        //alert(JSON.stringify(res.json()));
        this.employees = res.json()["employees"];
        // console.log(this.divisions);
        // debugger;
    	})

    	// this.materialservice.getMaterialCatalogue().subscribe(res =>{
    	// this.matlist = res.json()["items"];
    	// // console.log(this.emplist);
    	// // debugger;
    	// })

  	}

	checkMaterialCode(inputBarcode): void{
		// for (var mat in this.matlist){
		// 	if(this.matlist[mat].ID == inputBarcode){
		// 			this.materialservice.getMaterialDetails(inputBarcode).subscribe(res =>{
  //   				this.currmat = res.json()["items"][0]});
  //   				this.check = true;
  //   				console.log(this.matlist[mat].ID);
		// 	}
		// }
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
	    		}
			})
		}
  	}


}
