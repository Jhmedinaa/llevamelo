import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Servicio } from '../../models/servicio-model';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-publicar-servicio',
  templateUrl: 'publicar-servicio.html',
})
export class PublicarServicioPage {

  servicio:FormGroup; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider,
    public formBuilder: FormBuilder, public restService:RestServicesProvider, private alertCtrl: AlertController) {
    this.servicio = this.formBuilder.group({
      id_remitente: [this.authProvider.currentUser.id, Validators.required],
      nombre_remitente: ['', Validators.required],
      direccion_remitente: ['', Validators.required],
      telefono_remitente: ['', Validators.required],
      nombre_destinatario: ['', Validators.required],      
      direccion_destinatario: ['', Validators.required],
      telefono_destinatario: ['', Validators.required],
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
    this.restService.createServicio(this.servicio.value)
      .subscribe(data => {   
        if(!data['isError']){
          let alert = this.alertCtrl.create({
            title: 'Exito!',
            message: data['response'].data,
            buttons: [  {
              text: 'Entendido',
              handler: () => {
                this.navCtrl.push('RemitenteServiciosPage');
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
