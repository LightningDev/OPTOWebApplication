import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import 'style-loader!./login.scss';

// Auth Service
import {Router, ActivatedRoute, Params} from '@angular/router'
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public binlocation:AbstractControl;
  public stock:AbstractControl;
  private noti:string='';
  private validate:boolean=false;

  constructor(fb:FormBuilder, private loginservice: LoginService,private router:Router, private route: ActivatedRoute, ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'binlocation': false,
      'stock': false
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.binlocation = this.form.controls['binlocation'];
    this.stock = this.form.controls['stock'];
  }

    

  public onSubmit(values:Object):void {
    if (this.form.valid ) {
      this.loginservice.Validate(this.username.value,this.password.value).subscribe(res=>{
       
        if(res.json()["items"][0]!=null){
          if(res.json()["items"][0]["isLoggedIn"]==1){
            if(this.loginservice.Login(this.username.value,this.password.value)){
              this.validate =true;
              if(this.validate){
                if(this.stock.value){
                  this.router.navigate(['pages/stock']);
                }
                else if(this.binlocation.value){
                  this.router.navigate(['pages/location']);
                }
                else if(this.binlocation.value ==false){
                  this.router.navigate(['pages']);
                }else{
                  this.router.navigate(['login']);
                }
              }else{
                this.noti = "Wrong username and password, please try again !"
                this.router.navigate(['login']);
              }
            }else{
              this.validate =false;
              console.log(this.validate);
              return;
            }
          }else{
            return;
          }
        }else{
            this.noti = "Wrong username and password, please try again !"
            this.router.navigate(['login']);
        }    
      });
    }else{
      return;
    }
  }
}
