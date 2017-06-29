import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';


import { LoginService } from '../../../shared/services/login.service';
import { Router } from '@angular/router';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {
  
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState, private loginservice: LoginService, private router: Router ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  Logout(){
    this.loginservice.Logout();
    this.router.navigate(['/login']);
  }
}
