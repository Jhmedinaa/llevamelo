import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  usuario = 'remitente';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  
}
