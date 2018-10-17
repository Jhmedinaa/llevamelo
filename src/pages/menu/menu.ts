import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Nav } from 'ionic-angular/components/nav/nav';





@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewWillEnter() {
    //this.nav.setRoot("page-menu-transportista");
  }

}
