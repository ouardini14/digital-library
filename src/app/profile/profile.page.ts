import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { MenuController, NavController, AlertController } from '@ionic/angular';
declare const fireb_app: any;
declare const alert_field: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const set_data2: any;
declare const save_db: any;
declare const confirm_field: any;
declare const previaw: any;
declare const previw: any;
declare const delete_db: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myphoto: string;

  constructor(private camera: Camera, public alertController: AlertController,
    public navCtrl: NavController , private menu:MenuController,public router:Router,public activatedRoute:ActivatedRoute) { }
    user=this.activatedRoute.snapshot.paramMap.get('user') ;

    s:String=" ";
  ngOnInit() { 
    var u = <HTMLInputElement>document.getElementById("u");
  u.innerHTML= this.user;
  
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert(); 
  
set_data2(this.user);

  }
  pickImage() {
    const options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum:false,
    
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myphoto= 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
  }
  up2(){
    
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum:false,
      allowEdit:true,
      targetWidth:200,
      targetHeight:200,
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
      previaw(this.user,this.myphoto);
        
  
      }, (err) => {
        // Handle error
      });
    }
    

    toItem(){this.router.navigateByUrl('/item/'+this.user);}
delete(){
  fireb_app();
  fireb_data();
  fireb_storage()
  fireb_auth();
  sweet_alert();
  delete_db(this.user)}
}
