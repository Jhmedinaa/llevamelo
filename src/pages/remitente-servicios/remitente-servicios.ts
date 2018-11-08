import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../models/servicio-model';

@IonicPage()
@Component({
  selector: 'page-remitente-servicios',
  templateUrl: 'remitente-servicios.html',
})


export class RemitenteServiciosPage {
  encomiendas:Servicio[];

  constructor(public avCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemitenteServiciosPage');
  }

  getServicios(){

    
  }

}
