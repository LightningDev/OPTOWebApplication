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
  public stock:boolean = false;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private auth: AuthService, private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'stock': false
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.stock = this.form.controls['stock'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {}
      // your code goes here

       // console.log(values);
       // debugger;
      this.auth.login().subscribe(res =>{
        if(res.status === 200 && this.stock.value ==false){
          this.router.navigate(['pages']);
        }
        else if(res.status === 200 && this.stock.value){
          this.router.navigate(['pages/mobiledashboard']);
        }
      })
    }
  }
}
