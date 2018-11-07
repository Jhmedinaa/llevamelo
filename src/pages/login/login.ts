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

  user = {
    usuario: 'j',
    clave: '1'
  }
  

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  onRegistro(){
    this.navCtrl.push("SignupPage");
  }

  onLogin(){
    this.authProvider.login(this.user.usuario, this.user.clave).then(success => {
      if(success){
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
    //this.navCtrl.push("MenuPage");
  }
}
