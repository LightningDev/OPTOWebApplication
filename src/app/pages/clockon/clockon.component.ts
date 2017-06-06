import {Component, ElementRef} from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
//import 'style-loader!./tiles.scss';

@Component({
	selector: 'clock-on',
	templateUrl: './clockon.html'
})


export class ClockOn {

	private employee_code:string="";
	private job_code:string="";
	private process_code:string="";
	private emp_validate:boolean=false;
	private curr_code:string="";
	private curr_page:number;
	clocks: Observable<Array<any>>

	constructor(private router: Router, protected employeeservice: EmployeeService) {
		this.curr_page=1;
	}

	ngOnInit() {
   
	}

	One(event): void {
		this.curr_code=this.curr_code+"1";
	}
	Two(event): void {
		this.curr_code=this.curr_code+"2";
	}
	Three(event): void {
		this.curr_code=this.curr_code+"3";
	}
	Four(event): void {
		this.curr_code=this.curr_code+"4";
	}
	Five(event): void {
		this.curr_code=this.curr_code+"5";
	}
	Six(event): void {
		this.curr_code=this.curr_code+"6";
	}
	Seven(event): void {
		this.curr_code=this.curr_code+"7";
	}
	Eight(event): void {
		this.curr_code=this.curr_code+"8";
	}
	Nine(event): void {
		this.curr_code=this.curr_code+"9";
	}
	Zero(event): void {
		this.curr_code=this.curr_code+"0";
	}

	Clear(event): void {
		this.curr_code="";
	}

	Minus(event): void {
		this.curr_code=this.curr_code+"-";
	}

	Add(event): void {
		this.curr_code=this.curr_code+"+";
	}

	Back(event): void {
		if(this.curr_page==1){
			
		}else if(this.curr_page==2){
			this.curr_code=this.employee_code;
			document.getElementById('job').style.display = 'none';
			document.getElementById('emp').style.display = 'block';
			document.getElementById('pro').style.display = 'none';
			this.emp_validate=false;
			this.curr_page=1;
		}else if(this.curr_page==3){
			this.curr_code=this.job_code;
			document.getElementById('job').style.display = 'block';
			document.getElementById('emp').style.display = 'none';
			document.getElementById('pro').style.display = 'none';
			//this.validate=false;
			this.curr_page=2;
		}
	}

	Next(event): void {
		if(this.curr_code!=""){
				if(this.curr_page==1){
					this.employeeservice.getEmployees().subscribe(res=>{
						for(var obj in res.json()["employees"]){
							if(res.json()["employees"][obj]["code"]==this.curr_code){
								this.emp_validate=true;
								break;
							}
						}
						if(this.emp_validate){
							document.getElementById('job').style.display = 'block';
							document.getElementById('emp').style.display = 'none';
							document.getElementById('pro').style.display = 'none';
							this.employee_code=this.curr_code;
							this.curr_code="";
							this.curr_page=2;
						}else{
							alert("Wrong employee code");
						}

					})
					
				}

				if(this.curr_page==2){
					document.getElementById('job').style.display = 'none';
					document.getElementById('emp').style.display = 'none';
					document.getElementById('pro').style.display = 'block';
					this.job_code=this.curr_code;
					this.curr_code="";
					this.curr_page=3;

				}

				if(this.curr_page==3){

					this.employee_code=this.curr_code;
					document.getElementById('job').style.display = 'none';
					document.getElementById('emp').style.display = 'block';
					document.getElementById('pro').style.display = 'none';
					this.process_code=this.curr_code;
					this.curr_code="";
					this.curr_page=1;
				}
			
		}else{
			alert("Empty code detected. Please use the prepared keyboard to input the code");
		}
		
	}

	Status(event): void {
		//show status

		alert("employee code "+this.employee_code);
		alert("job code "+this.job_code);
		alert("process code " +this.process_code);
		//alert(this.curr_code);
		alert(this.curr_page);
	}

	Delete(event): void {
		this.curr_code=this.curr_code.slice(0,-1);
	}


}	