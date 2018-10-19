import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular/components/nav/nav';


export interface PageInterface {
  title: string,
  pageName: string,
  index: number,
  icon: string
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages: PageInterface[];

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMenuPages();
  }

  ionViewWillEnter() {
    this.openPage('MenuTransportistaPage');
  }

  getMenuPages() {
    this.pages = [
      { title: 'Inicio', pageName: 'MenuTransportistaPage', index: 1, icon: 'home' },
      { title: 'Mis Recados', pageName: 'RecadosPage', index: 2, icon:'bicycle' },
    ];
  }

  openPage(pagina){
    this.nav.setRoot(pagina);
  }

}
