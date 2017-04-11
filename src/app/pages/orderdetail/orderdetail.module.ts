import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './orderdetail.routing';
import { OrderDetail } from './orderdetail.component';

import { OrderDetailService } from '../../shared/services/orderdetail.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    OrderDetail
  ],
  providers: [
    OrderDetailService
  ]
})
export class OrderDetailModule {}
