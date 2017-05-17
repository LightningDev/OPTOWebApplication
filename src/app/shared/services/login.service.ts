import {Injectable, Inject} from "@angular/core";
import {AppConfig} from "../../app.module";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from '@angular/router';



@Injectable()

export class LoginService{
    private username:string;
    private password:string;
    private userLoggedIn:boolean=false;

    constructor(@Inject ('APP_CONFIG_TOKEN') private config:AppConfig, private http:Http, private router: Router){


    }
    
    Validate(username,password):Observable<Response> {
        return this.http.post(
            `${this.config.BASE_URL}/api/login`, 
            JSON.stringify({"username": username, "password": password}),
            {
                headers:new Headers({
                    'authorization':"Basic " + btoa(this.config.APP_ID + ":" + this.config.APP_PASSWORD)
                }
                )

            })

    }

    Login(username:string, password:string):boolean{
        this.username=username;
        this.password=password;
        this.userLoggedIn=true;
        if(this.username===username&&this.password===password&&this.userLoggedIn===true){
            return true;
        }
        else{
            return false;
        }
    }

    Logout():boolean{
        this.username=null;
        this.password=null;
        this.userLoggedIn=false;
        return false;
    }

    isLoggedIn():boolean{
        if (this.userLoggedIn) {
            // logged in so return true
            return true;
        }else{
            return false;
        }
    }

}