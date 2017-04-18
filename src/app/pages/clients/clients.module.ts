import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ClientDetails } from './clientdetails/clientdetails.component';
import { routing } from './clients.routing';
import { Clients } from './clients.component';

import { ClientService } from '../../shared/services/client.service';
import { ChartistJsService } from './clientdetails/chartistJs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Clients,
    ClientDetails
  ],
  providers: [
    ClientService,
    ChartistJsService
  ]
})
export class ClientsModule {}
