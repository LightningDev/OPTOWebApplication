import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AuthService } from '../shared/services/auth.service'
import { LoginService } from '../shared/services/login.service'

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages],
  providers:[AuthService,LoginService]
})
export class PagesModule {
}
