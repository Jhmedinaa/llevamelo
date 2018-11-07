import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, public navParams: NavParams, private appCtrl: App) {
    
  }

  ionViewWillEnter() {
    if (this.authProvider.isRemitente) {
      this.openPage('RemitenteServiciosPage');
    } else {
      this.pages = [
        { title: 'Inicio', pageName: 'MenuTransportistaPage', index: 1, icon: 'home' },
        { title: 'Mis Recados', pageName: 'RecadosPage', index: 2, icon: 'bicycle' },
        { title: 'Pendientes', pageName: 'PendientesPage', index: 3, icon: 'cube' },
      ];

      this.openPage('MenuTransportistaPage');
    }
  }

  openPage(pagina) {
    this.nav.setRoot(pagina);
  }

  onClickCerrarSesion() {
    //this.nav.setRoot("LoginPage");
    this.appCtrl.getRootNav().setRoot('LoginPage');
  }
}
