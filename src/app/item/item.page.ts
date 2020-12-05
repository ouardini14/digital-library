import { Component, OnInit } from '@angular/core';
import {  NavController, AlertController } from '@ionic/angular' ;
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import $ from "jquery";
import { PopoverComponent } from '../popover/popover.component';
import { Pop1Page } from '../pop1/pop1.page';

declare const fireb_app: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const set_data3: any;
declare const fire: any;
declare const fire_fire: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const jqr: any;
declare const set_items: any;
declare const set_items_fav: any;


@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {


  


  constructor(private camera: Camera,    public alertController: AlertController,
    public navCtrl: NavController , private menu:MenuController,public router:Router,public activatedRoute:ActivatedRoute,public popoverController: PopoverController )  
     { }
     async presentPopover(ev: any) {
      const popover = await this.popoverController.create({
        component: Pop1Page,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
  user=this.activatedRoute.snapshot.paramMap.get('user') ;
   toSettings(){this.router.navigateByUrl('/settings/'+this.user); }
   toProfile(){ this.router.navigateByUrl('/profile/'+this.user);}
   toFriends(){this.router.navigateByUrl('/friends/'+this.user); }
   toNotifi(){this.router.navigateByUrl('/notification/'+this.user); }
   toLibrary(){ this.router.navigateByUrl('/item/'+this.user);
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("mySidenav").style.borderStyle = "none";
   document.getElementById("mySidenav").style.borderRightColor="black";}
   toAdd(){this.router.navigateByUrl('/add-item/'+this.user);}

   
   ngOnInit() { 
    $("#fav").attr("color", "medium");
    $("#all").attr("color", "success");
    $("#fil").prepend('<h2  style="text-align:center;"> <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Movie <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Movie"> </div> <br> <br> <h2 style="text-align:center;">    <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Serie<hr  style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Serie"> </div> <br> <br> <h2 style="text-align:center;">      <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Book        <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> </h2> <br> <div id="Book"> </div> <br> <br>');

    fireb_app();
    fireb_data();
    fireb_storage();
    fireb_auth();
    sweet_alert(); 
    jqr();
  set_items(this.user);

   
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
  jqr();
  set_data3(this.user);
  
 
  }
  all(){
    $("#fav").attr("color", "medium");
    $("#all").attr("color", "success");
    $("#fil").empty();
    $("#fil").prepend('<h2  style="text-align:center;"> <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Movie <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Movie"> </div> <br> <br> <h2 style="text-align:center;">    <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Serie<hr  style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Serie"> </div> <br> <br> <h2 style="text-align:center;">      <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Book        <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> </h2> <br> <div id="Book"> </div> <br> <br>');
    fireb_app();
    fireb_data();
    fireb_storage();
    fireb_auth();
    sweet_alert(); 
    jqr();
  set_items(this.user);
  }
  fav(){
    $("#all").attr("color", "medium");
    $("#fav").attr("color", "success");
    $("#fil").empty();
    fireb_app();
    fireb_data();
    fireb_storage();
    fireb_auth();
    sweet_alert(); 
    jqr();
  set_items_fav(this.user);
  

  }









 
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.borderStyle = "solid";
      document.getElementById("mySidenav").style.borderRightColor="white";
      


    }
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.borderStyle = "none";
      document.getElementById("mySidenav").style.borderRightColor="black";

    }
 
    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        header: 'Alert!!',
        message: 'Are you sure you want to sign out ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel'); }
           }
          , {
            text: 'Yes',
            handler: () => {
              this.navCtrl.navigateRoot('/sign-in') ;
            }
          }
        ]
      });
  
      await alert.present();
    }



}
