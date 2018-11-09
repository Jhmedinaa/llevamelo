import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-singup-t',
  templateUrl: 'singup-t.html',
})
export class SingupTPage {

  usuario: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public restService:RestServicesProvider, private alertCtrl: AlertController
  ) {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      documento: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      placa: ['', Validators.required],
      tipo_vehiculo: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  } 

  onSubmit(){
    this.restService.registrar(2, this.usuario.value)
      .subscribe(data => {   
        if(!data['isError']){
          let alert = this.alertCtrl.create({
            title: 'Exito!',
            message: data['response'].data,
            buttons: [  {
              text: 'Entendido',
              handler: () => {
                this.navCtrl.push('LoginPage');
              }
            }]
          });
    
          alert.present();
        }
      }, error =>{
        console.log(error);
        console.log(error['error'].isError);
        if(error['error'].isError){
          let alert = this.alertCtrl.create({
            title: 'Registro Fallido',
            message: error['error'].response.errorMessage + ' - Error (' + error['error'].response.errorCode + ')',
            buttons: ['Entendido']
          });
    
          alert.present();
        }
      });
  }
}
