import { Component, OnInit } from '@angular/core';
import {  NavController, AlertController } from '@ionic/angular' ;
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
declare var $: any;
declare const fireb_app: any;
declare const alert_field: any;
declare const fireb_data: any;
declare const sweet_alert: any;

declare const fire: any;
declare const fire_fire: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const add_item: any;
declare const date_format: any;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(private camera: Camera,    public alertController: AlertController,
    public navCtrl: NavController , private menu:MenuController,public router:Router,public activatedRoute:ActivatedRoute )  
     { }
     user=this.activatedRoute.snapshot.paramMap.get('user') ;
     toItem(){this.router.navigateByUrl('/item/'+this.user);}
     cancel(){ this.router.navigateByUrl('/item/'+this.user); 
    }  
  ngOnInit() {
  }
itm:String;
date:string;
aud:string;
gr:string[]; 
item(event){

  if(event.target.value=="Book"){
    $("#d").remove();
    $("#s").remove();
    $("#da").prepend('<ion-label id="d" position="stacked">Author</ion-label>')
    $("#g").prepend('<div id="s"> <ion-select-option value="Action">Action</ion-select-option> <ion-select-option value="Comic">Comic</ion-select-option><ion-select-option value="Crime">Crime</ion-select-option><ion-select-option value="Drama">Drama</ion-select-option><ion-select-option value="FairyTale">FairyTale</ion-select-option><ion-select-option value="Fantasy">Fantasy</ion-select-option><ion-select-option value="Historical">Historical</ion-select-option><ion-select-option value="Horror">Horror</ion-select-option><ion-select-option value="Humor">Humor</ion-select-option><ion-select-option value="Mystery">Mystery</ion-select-option><ion-select-option value="Fiction">Fiction</ion-select-option><ion-select-option value="Romance">Romance</ion-select-option><ion-select-option value="Science Fiction">Science Fiction</ion-select-option><ion-select-option value="Short Story">Short Story</ion-select-option><ion-select-option value="Thriller">Thriller</ion-select-option> </div>');
    this.itm=event.target.value;
  }
  if(event.target.value=="Movie" ||event.target.value=="Serie"){
    $("#d").remove();
    $("#s").remove();
    $("#da").prepend('<ion-label id="d" position="stacked">Director</ion-label>');
    $("#g").prepend('<div id="s"> <ion-select-option value="Action">Action</ion-select-option> <ion-select-option value="Drama">Drama</ion-select-option>  <ion-select-option value="Horror">Horror</ion-select-option>  <ion-select-option value="Documentary">Documentary</ion-select-option> <ion-select-option value="Romance">Romance</ion-select-option><ion-select-option value="Fantasy">Fantasy</ion-select-option><ion-select-option value="Science Fiction">Science Fiction</ion-select-option></div>')
    this.itm=event.target.value;
  }
  
 
 }
dat(event){    
  
  this.date=event.target.value;
  var d=this.date.split("T");
  this.date= d[0];
}
genre(event){
  this.gr=event.target.value;

}
audience(event){
  this.aud=event.target.value;
}
  g:string="";

 add(){

 this.g=this.gr.join(",");
 console.log(this.g);
  var name = <HTMLInputElement>document.getElementById("name");
  var auth = <HTMLInputElement>document.getElementById("direct");
  var desc = <HTMLInputElement>document.getElementById("desc");
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
  add_item(this.user,this.myphoto,this.itm,name.value,auth.value,this.date,this.g,desc.value,this.aud);
 }
 myphoto: string;


 up(){
    
  const options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum:false,
    allowEdit:true,
    targetWidth:300,
    targetHeight:300,
    }
    this.camera.getPicture(options).then((imageData) => {
      fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myphoto= 'data:image/jpeg;base64,' + imageData;
      

    }, (err) => {
      // Handle error
    });
  }

}
