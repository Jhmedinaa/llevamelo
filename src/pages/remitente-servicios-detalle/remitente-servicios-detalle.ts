import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../models/servicio-model';


@IonicPage()
@Component({
  selector: 'page-remitente-servicios-detalle',
  templateUrl: 'remitente-servicios-detalle.html',
})
export class RemitenteServiciosDetallePage {

  servicio: Servicio;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.servicio = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemitenteServiciosDetallePage');
  }

}
