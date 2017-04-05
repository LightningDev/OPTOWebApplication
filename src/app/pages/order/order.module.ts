import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './order.routing';
import { Order } from './order.component';
// import { routingDetail } from '../orderdetail/orderdetail.routing';
// import { OrderDetail } from '../orderdetail/orderdetail.component';

import { OrderService } from '../../shared/services/order.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    // routingDetail,
    routing
  ],
  declarations: [
    Order,
    // OrderDetail
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule {}
