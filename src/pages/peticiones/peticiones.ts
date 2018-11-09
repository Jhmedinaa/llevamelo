import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { Servicio } from '../../models/servicio-model';

/**
 * Generated class for the PeticionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peticiones',
  templateUrl: 'peticiones.html',
})
export class PeticionesPage {
  encomiendas: Servicio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServicesProvider) {
    this.getServicios();
  }

  getServicios() {
    this.restService.getServiciosByRemitente(3).subscribe(
      encomiendas => this.encomiendas = encomiendas
    );
  }

  getDetalle(item: Servicio) {
    this.navCtrl.push("GestionarPeticionPage", { data: item });
  }
}
