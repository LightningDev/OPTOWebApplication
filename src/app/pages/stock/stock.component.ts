import {Component, ViewChild, HostListener,ElementRef, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { StockService } from '../../shared/services/stock.service';
import { DivisionService } from '../../shared/services/division.service';
import { EmployeeService } from '../../shared/services/employee.service';
import { MaterialService } from '../../shared/services/material.service';
import { BinLocationService } from '../../shared/services/binlocation.service';
import { ModalDirective } from 'ng2-bootstrap';
import 'style-loader!./buttons.scss';

@Component({
  selector: 'stock-location',
  styleUrls: ['./modals.scss'],
  templateUrl: './stock.html',
})

export class Stock implements AfterViewInit{

	divisions: Observable<Array<any>>;
	employees: Observable<Array<any>>;
	currentRadio: String;
	currentDivision: String;
	currentEmployee: String;
	noti: String = '';

	constructor(private divService: DivisionService, private empService: EmployeeService, private binlocationService: BinLocationService, private _elementRef : ElementRef) {
		
	}

	ngOnInit() {
    	this.divisions = this.divService.getDivisions().map(response => response.json()["items"]);
    	this.employees = this.empService.getEmployees().map(response => response.json()["employees"]);
    	$("#stockInOut").prop("checked", true);
	}

	ngAfterViewInit(){
		if(screen.width > 420){
      	
      		document.getElementsByClassName('widgets')['0'].style.width = '400px';
    	}
  	}

	radio_stock(event) {		
		this.currentRadio = event.currentTarget.defaultValue;
	}

	detectBarcode(event) {
		if($("#inputBarcode").val()!=""){
			this.noti = ("");
			this.binlocationService.checkItemCode(event.currentTarget.value).subscribe(res => {
				if (res.json() != '') {
					let matcode = res.json()["material_code"];
					if (matcode != null) {
						$("#inputCode").val(matcode);
						$("#inputOnHand").focus();
					}else{
						this.noti = ("Wrong Barcode. Please try again !");
						return;
					}
				}
			})
		}else{
			this.noti = ("Please input the Barcode");
			return;
		}
	}

	process(event) {
		//alert($("#select_divisions").val() + " " + $("#select_employees").val() + " " + $("#stockInOut").val() + " " + + $("#inputOnHand").val());

		if ($("#stockInOut").val() != "" && $("#inputOnHand").val() != "" && $("#inputBarcode").val() != "" && $("#inputCode").val() != "") {
			alert("Done");	
			$("#inputBarcode").focus();
			$("#inputBarcode").val('');
			$("#inputCode").val('');
			$("#inputOnHand").val('');
		} else {
			alert("Please fill in all information");
		}
	}

}
