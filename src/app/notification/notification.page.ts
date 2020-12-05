import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import $ from "jquery";

declare const fireb_app: any;
declare const alert_field: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const jqr: any;
declare const set_noti: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private camera: Camera,    public alertController: AlertController,
    public navCtrl: NavController , private menu:MenuController,public router:Router,public activatedRoute:ActivatedRoute )  
     { }
     user=this.activatedRoute.snapshot.paramMap.get('user') ;
     toItem(){this.router.navigateByUrl('/item/'+this.user);}

  ngOnInit() {
    fireb_app();
    fireb_data();
    fireb_storage();
    fireb_auth();
    sweet_alert(); 
    jqr();
    set_noti(this.user);

  }

}
