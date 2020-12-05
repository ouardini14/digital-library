import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {  NavController } from '@ionic/angular' ;
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    public navCtrl: NavController,
    private menu: MenuController,
) {
    this.initializeApp();
    }
   
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
 


  
}
