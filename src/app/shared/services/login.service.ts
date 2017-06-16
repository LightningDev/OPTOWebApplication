import {Injectable, Inject} from "@angular/core";
import {AppConfig} from "../../app.module";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from '@angular/router';



@Injectable()

export class LoginService{
    private username:string;
    private password:string;
    private menu:any;
    private menu_render:string='[{"path": "pages","children": [{ "path": "order","data": {"menu": {"title": "Order","icon": "ion-ios-cart","selected": false,"expanded": false,"order": 50}}}'
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

    Login(username:string, password:string, menu:any):boolean{
        this.username=username;
        this.password=password;
        this.menu=menu;
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

    getMenu(){
        return this.menu;
    }

    getMenuRenderByUser(){
   
       if(this.menu[0]["menu_part"]==1){
           this.menu_render = this.menu_render + ', {"path": "part","data": {"menu": {"title": "Part","icon": "ion-wrench","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_location"]==1){
           this.menu_render = this.menu_render + ', {"path": "location","data": {"menu": {"title": "Location","icon": "ion-ios-box","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_location_lookup"]==1){
           this.menu_render = this.menu_render + ', {"path": "locationlookup","data": {"menu": {"title": "Location Look Up","icon": "ion-ios-box","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_stock"]==1){
           this.menu_render = this.menu_render + ', {"path": "stock","data": {"menu": {"title": "Stock","icon": "ion-cube","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_material"]==1){
           this.menu_render = this.menu_render + ', {"path": "material","data": {"menu": {"title": "Material","icon": "ion-pricetag","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_client"]==1){
           this.menu_render = this.menu_render + ', {"path": "clients","data": {"menu": {"title": "Client","icon": "ion-wrench","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_supplier"]==1){
           this.menu_render = this.menu_render + ', {"path": "suppliers","data": {"menu": {"title": "Supplier","icon": "ion-android-contacts","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_clock_on"]==1){
           this.menu_render = this.menu_render + ', {"path": "clockon","data": {"menu": {"title": "Clock On","icon": "ion-ios-clock","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_clock_tile"]==1){
           this.menu_render = this.menu_render + ', {"path": "clocktiles","data": {"menu": {"title": "Clock Tiles","icon": "ion-ios-clock","selected": false,"expanded": false,"order": 50}}}'
       }
       if(this.menu[0]["menu_production_tile"]==1){
           this.menu_render = this.menu_render + ', {"path": "productiontiles","data": {"menu": {"title": "Production Tiles","icon": "ion-wrench","selected": false,"expanded": false,"order": 50}}}'
       }
      
       

       this.menu_render = this.menu_render + ']}]';
       var object_menu = JSON.parse(this.menu_render);
       return object_menu;
    }

}