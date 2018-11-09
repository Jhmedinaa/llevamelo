import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { Servicio } from '../../models/servicio-model';

/**
 * Generated class for the RecadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recados',
  templateUrl: 'recados.html',
})
export class RecadosPage {
  encomiendas: Servicio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, 
    public restService: RestServicesProvider) {
    console.log('id de usuario' + this.authProvider.currentUser.id);
  }

  ionViewDidLoad() {
    this.getServicios();
  }

  getServicios() {
    this.restService.getServiciosByTransportista(this.authProvider.currentUser.id).subscribe(
      encomiendas => this.encomiendas = encomiendas
    );
  }

}
