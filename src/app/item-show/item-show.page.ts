import { Component, OnInit } from '@angular/core';
import {  NavController, AlertController } from '@ionic/angular' ;
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import $  from 'jquery';

declare const fireb_app: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const jqr: any;
declare const set_item_show: any;
declare const test_fav: any;
declare const add_fa: any;
declare const add_eva: any;
declare const share_it: any;

@Component({
  selector: 'app-item-show',
  templateUrl: './item-show.page.html',
  styleUrls: ['./item-show.page.scss'],
})
export class ItemShowPage implements OnInit {

  constructor(private camera: Camera,    public alertController: AlertController,
    public navCtrl: NavController , private menu:MenuController,public router:Router,public activatedRoute:ActivatedRoute) { }
  evalu:string;

    info=this.activatedRoute.snapshot.paramMap.get('info') ;
            infos=this.info.split("_");
  user:string=this.infos[0];
  sh:String="_"+this.infos[1]+"_"+this.infos[2]+"_"+this.infos[3]+"_"+this.infos[4]+"_"+this.infos[5]+"_"+this.infos[6];

    toItem(){this.router.navigateByUrl('/item/'+this.user);}
    add_fav(){
      fireb_app();
      fireb_data();
      fireb_storage()
      fireb_auth();
      sweet_alert(); 
      add_fa(this.user,this.infos[1],this.infos[2]);

    }
  au:string=this.infos[3].replace("1",".");

  ngOnInit() {
    document.getElementById("ev").style.visibility = "hidden";
    fireb_app();
    fireb_data();
    fireb_storage()
    fireb_auth();
    sweet_alert(); 
    jqr();
  set_item_show(this.infos[0],this.infos[1],this.infos[2],this.infos[6]);
  fireb_app();
    fireb_data();
    fireb_storage()
    fireb_auth();
    sweet_alert(); 
  test_fav(this.user,this.infos[1],this.infos[2]);
  }

  evaluation(event){
    this.evalu=event.target.value;
  }

 eva(){
  document.getElementById("eval").style.visibility = "hidden";
  document.getElementById("ev").style.visibility = "visible";
  } 

can(){
  document.getElementById("eval").style.visibility = "visible";
  document.getElementById("ev").style.visibility = "hidden";
}

add_eval(){
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
  add_eva(this.infos[0],this.infos[1],this.infos[2],this.evalu);

}
share(){
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
  share_it(this.infos[0],this.sh);

}
}
