import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StockService } from '../../shared/services/stock.service';

import { routing } from './stock.routing';
import { Stock } from './stock.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Stock
  ],
  providers: [
    StockService
  ]
})
export class StockModule {}
