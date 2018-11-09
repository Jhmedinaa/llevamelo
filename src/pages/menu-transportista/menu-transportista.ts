import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomiendaModel } from '../../models/encomineda-model';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { Servicio } from '../../models/servicio-model';


@IonicPage()
@Component({
  selector: 'page-menu-transportista',
  templateUrl: 'menu-transportista.html',
})
export class MenuTransportistaPage {

  encomiendas: Servicio[];
  encomiendasFilter: Servicio[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServicesProvider) {
    this.getEncomiendas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTransportistaPage');
  }

  getEncomiendas() {
    this.restService.getServiciosByEstado(1).subscribe(
      encomiendas => this.encomiendas = encomiendas
    ); 

    this.encomiendasFilter = this.encomiendas;
  }

  getItems(ev) {
    //Capturar Texto
    var val = ev.target.value;
    console.log(val);
    if (val && val.trim() != '') {
      this.encomiendas = this.encomiendas.filter((encomienda) => {
        return ((encomienda.direccionRemitente.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1 
        ||  (encomienda.direccionDestinatario.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1);
      });
    } else {
      this.encomiendas = this.encomiendasFilter;
    }
  }

  getDetalle(item: EncomiendaModel){
    this.navCtrl.push("RecadoDetallePage", { data: item });
  }

}
