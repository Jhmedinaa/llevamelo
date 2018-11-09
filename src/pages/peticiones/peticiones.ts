import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { Servicio } from '../../models/servicio-model';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-peticiones',
  templateUrl: 'peticiones.html',
})
export class PeticionesPage {
  encomiendas: Servicio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public restService: RestServicesProvider,  private authProvider: AuthProvider) {
    this.getServicios();
  }

  getServicios() {
    this.restService.getServiciosByRemitente(this.authProvider.currentUser.id).subscribe(
      encomiendas => this.encomiendas = encomiendas
    );
  }

  getDetalle(item: Servicio) {
    this.navCtrl.push("GestionarPeticionPage", { data: item });
  }
}
