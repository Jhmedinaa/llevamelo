import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomiendaModel } from '../../models/encomineda-model';


@IonicPage()
@Component({
  selector: 'page-menu-transportista',
  templateUrl: 'menu-transportista.html',
})
export class MenuTransportistaPage {

  encomiendas: EncomiendaModel[];
  encomiendasFilter: EncomiendaModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getEncomiendas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTransportistaPage');
  }

  getEncomiendas() {
    this.encomiendas = [
      { id: 1, direccionDestino: 'Calle 78 a#91c 23', barrioDestino: 'Robledo', direccionRecogida: 'Carrera 23c 11 25', barrioRecogida: 'poblado', valor: 15000, descripcionPaquete: 'Caja De Ropa', peso: 15 },
      { id: 2, direccionDestino: 'Carrera 11 23 b 44', barrioDestino: 'Agucatala', direccionRecogida: 'Circular 233 a 21', barrioRecogida: 'Manrrique', valor: 12000, descripcionPaquete: 'Paquete Pequeño', peso: 5 },
      { id: 3, direccionDestino: 'Trans 233 Ed Salvador Dep 203', barrioDestino: 'Laureles', direccionRecogida: 'Calle 22 c 11', barrioRecogida: 'Floresta', valor: 20000, descripcionPaquete: 'Caja de madera', peso: 12 },
      { id: 4, direccionDestino: 'Circula 10 sur  23', barrioDestino: 'La estrella', direccionRecogida: 'Calle 11 22 b a 1', barrioRecogida: 'Niquia', valor: 30000, descripcionPaquete: 'Bolsa con objetos personales', peso: 10 },
      { id: 5, direccionDestino: 'Calle 78C # 91 b 23', barrioDestino: 'Miramar', direccionRecogida: 'Calle 11l bb', barrioRecogida: 'Santa Maria', valor: 8000, descripcionPaquete: 'Pc portatil', peso: 5 },
      { id: 5, direccionDestino: 'Carre 23d # 72 d 11', barrioDestino: 'Los Colores', direccionRecogida: 'Calle 11l bb', barrioRecogida: 'Robledo', valor: 7000, descripcionPaquete: 'Libros', peso: 5 },
    ];

    this.encomiendasFilter = this.encomiendas;
  }

  getItems(ev) {
    //Capturar Texto
    var val = ev.target.value;
    console.log(val);
    if (val && val.trim() != '') {
      this.encomiendas = this.encomiendas.filter((encomienda) => {
        return ((encomienda.barrioDestino.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1 
        ||  (encomienda.barrioRecogida.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())) > -1);
      });
    } else {
      this.encomiendas = this.encomiendasFilter;
    }
  }

  getDetalle(item: EncomiendaModel){
    console.log(item.barrioDestino);
    this.navCtrl.push("RecadoDetallePage", { data: item });
  }

}
