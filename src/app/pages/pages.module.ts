import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AuthService } from '../shared/services/auth.service'
import { LoginService } from '../shared/services/login.service'

import { LocationGuard } from '../shared/services/location.guard.ts'
import { PalletGuard } from '../shared/services/pallet.guard.ts'
import { LocationLookUpGuard } from '../shared/services/locationlookup.guard.ts'
import { MaterialGuard } from '../shared/services/material.guard.ts'
import { PartGuard } from '../shared/services/part.guard.ts'
import { OrderGuard } from '../shared/services/order.guard.ts'
import { StockGuard } from '../shared/services/stock.guard.ts'
import { ClientGuard } from '../shared/services/client.guard.ts'
import { SupplierGuard } from '../shared/services/supplier.guard.ts'
import { ClockOnGuard } from '../shared/services/clockon.guard.ts'
import { ClockTileGuard } from '../shared/services/clocktile.guard.ts'
import { ProductionTileGuard } from '../shared/services/productiontile.guard.ts'

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages],
  providers:[
  AuthService,
  LoginService,
  LocationGuard,
  PalletGuard,
  LocationLookUpGuard,
  MaterialGuard,
  PartGuard,
  OrderGuard,
  StockGuard,
  ClientGuard,
  SupplierGuard,
  ClockOnGuard,
  ClockTileGuard,
  ProductionTileGuard,
  ]
})
export class PagesModule {
}
