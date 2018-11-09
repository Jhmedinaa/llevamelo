import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../models/servicio-model';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';

@IonicPage()
@Component({
  selector: 'page-remitente-servicios',
  templateUrl: 'remitente-servicios.html',
})

export class RemitenteServiciosPage {
  encomiendas: Servicio[];
  encomiendasFilter: Servicio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServicesProvider) {
    this.getServicios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemitenteServiciosPage');
  }

  getServicios() {
    this.restService.getServiciosByRemitente(1).subscribe(
      encomiendas => this.encomiendas = encomiendas
    );

    this.restService.getServiciosByRemitente(1).subscribe(
      encomiendas => this.encomiendasFilter = encomiendas
    );
  }

  getDetalle(item: Servicio) {
    this.navCtrl.push("RemitenteServiciosDetallePage", { data: item });
  }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.encomiendas = this.encomiendas.filter((encomienda) => {
        return ((encomienda.direccionDestinatario.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1
          || (encomienda.direccionRemitente.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1
        );
      });
    } else {
      this.encomiendas = this.encomiendasFilter;
    }
  }
}
