import { Routes, RouterModule }  from '@angular/router';
import { Order } from './order.component';
// import { OrderDetail } from '../orderdetail/orderdetail.component';
import { ModuleWithProviders } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Order,
  },
  // {
  //   path: '',
  //   component: OrderDetail,
   
  // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
