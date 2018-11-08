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

  servicio:FormGroup; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.servicio = this.formBuilder.group({
      nombre_remitente: ['', Validators.required],
      direccion_remitente: ['', Validators.required],
      telefono_remitente: ['', Validators.required],
      nombre_destinatario: ['', Validators.required],
      direccion_destinatario: ['', Validators.required],
      telefono_detinatario: ['', Validators.required],
      cantidad_documentos: ['0', Validators.required],
      cantidad_paquetes: ['0', Validators.required],
      peso_paquetes: ['0', Validators.required],
      peso_volumetrico_paquetes: ['0', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarServicioPage');
  }

  onSubmit(){
    
  }

}
