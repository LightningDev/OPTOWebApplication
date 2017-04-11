import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './mobiledashboard.routing';
import { MobileDashboard } from './mobiledashboard.component';

//import { MobileDashboardService } from '../../shared/services/mobiledashboard.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    MobileDashboard
  ],
  providers: [
    //MobileDashboardService
  ]
})
export class MobileDashboardModule {}
