import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Servicio } from '../../models/servicio-model';


@IonicPage()
@Component({
  selector: 'page-publicar-servicio',
  templateUrl: 'publicar-servicio.html',
})
export class PublicarServicioPage {

  servicio:Servicio = new Servicio();

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarServicioPage');
  }

}
