import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu-transportista',
  templateUrl: 'menu-transportista.html',
})
export class MenuTransportistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTransportistaPage');
  }

  getItems(ev: any) {}
  
}
