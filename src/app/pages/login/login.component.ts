import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import 'style-loader!./login.scss';

// Auth Service
import {Router} from '@angular/router'
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public binlocation:AbstractControl;
  public stock:AbstractControl;

  constructor(fb:FormBuilder, private auth: AuthService, private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'binlocation': false,
      'stock': false
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.binlocation = this.form.controls['binlocation'];
    this.stock = this.form.controls['stock'];
  }

    

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.auth.login().subscribe(res =>{
          if(res.status === 200 && this.stock.value){
            this.router.navigate(['pages/stock']);
           }
          else if(res.status === 200 && this.binlocation.value){
            this.router.navigate(['pages/location']);
           }
          else if(res.status === 200 && this.binlocation.value ==false){
            this.router.navigate(['pages']);
          }else{
            this.router.navigate(['pages/login']);
          }
       })

    }
  }
}
