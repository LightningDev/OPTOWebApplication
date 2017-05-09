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

	clocks: Observable<Array<any>>

	constructor(private router: Router, protected service: EmployeeService) {

	}

	ngOnInit() {
   
	}

	button_details(event): void {
		// this.router.navigate(['pages/clocktiles/details', "a"]); 
	}
}	