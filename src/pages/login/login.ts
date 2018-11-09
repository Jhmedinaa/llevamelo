import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  error = false;

  user = {
    usuario: '',
    clave: ''
  }

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  onRegistro(item) {
    if (item == 'remitente') {
      this.navCtrl.push("SignupPage");
    } else {
      this.navCtrl.push("SingupTPage");
    }
  }

  onLogin() {
    this.error = false;

    if (this.user.usuario != '' && this.user.clave != '') {
      this.authProvider.login(this.user.usuario, this.user.clave).then(success => {
        if (success) {
          this.navCtrl.setRoot("MenuPage");
        }
      }).catch(err => {

        let alert = this.alertCtrl.create({
          title: 'Ingreso Fallido',
          message: 'Por favor verifica tus datos.',
          buttons: ['Entendido']
        });

        alert.present();
      });
    }else{
      this.error = true;
    }
    //this.navCtrl.push("MenuPage");
  }
}
