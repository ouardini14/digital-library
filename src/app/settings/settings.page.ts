import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

declare const fireb_app: any;
declare const alert_field: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const set_data: any;
declare const save_db: any;
declare const confirm_field: any;
declare const savy: any;



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor( public activatedRoute:ActivatedRoute ,public router:Router) { 
    
    }
    user=this.activatedRoute.snapshot.paramMap.get('user') ;

  ngOnInit() { 
    fireb_app();
    fireb_data();
    sweet_alert(); 
    var u = <HTMLInputElement>document.getElementById("username");

  u.value= this.user;
    
    
  set_data(this.user);}




  

  save(){
    fireb_app();
    fireb_data();
    sweet_alert();
    savy(this.user);
     }
    
   cancel(){ this.router.navigateByUrl('/item/'+this.user); 
     }  
   
}
