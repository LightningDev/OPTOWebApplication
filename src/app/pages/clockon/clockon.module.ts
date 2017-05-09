import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import { EmployeeService } from '../../shared/services/employee.service';
import { ClockOn } from './clockon.component'
import { routing } from './clockon.routing'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    ClockOn,
  ],
  providers: [
    EmployeeService
  ]
})
export class ClockOnModule {}
