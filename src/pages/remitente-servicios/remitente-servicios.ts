import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-remitente-servicios',
  templateUrl: 'remitente-servicios.html',
})


export class RemitenteServiciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemitenteServiciosPage');
  }

}
