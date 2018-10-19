import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomiendaModel } from '../../models/encomineda-model';

/**
 * Generated class for the RecadoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recado-detalle',
  templateUrl: 'recado-detalle.html',
})
export class RecadoDetallePage {

  encomienda:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.encomienda = navParams.get('data');
    console.log(this.encomienda.valor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecadoDetallePage');
  }

}
