import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  NavController, MenuController } from '@ionic/angular' ;

declare const connect_db: any;
declare const fireb_app: any;
declare const alert_field: any;
declare const jqr: any;
declare const fireb_data: any;
declare const sweet_alert: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignINPage implements OnInit {
  

  constructor(public navCtrl: NavController,private menu:MenuController,public router:Router) { }
  ngOnInit() {
  }
  goback(){this.navCtrl.back();}
  
  confirm(){
    
    var u = <HTMLInputElement>document.getElementById("user");
    var p = <HTMLInputElement>document.getElementById("pwd");

    if(p.value=== ""||u.value=== ""){alert_field("please enter all the required fields!")}
    else if(p.value!= ""||u.value!= ""){
     
          jqr();
          fireb_app();
          fireb_data();
          sweet_alert(); 
          connect_db(u.value,p.value);
    
    }
   
    
    }

  gotoSIGNUP(){this.navCtrl.navigateRoot('/sign-up') ;}
 
 
  pswd(){
  var x = <HTMLInputElement>document.getElementById("pwd");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
 }
  
}
