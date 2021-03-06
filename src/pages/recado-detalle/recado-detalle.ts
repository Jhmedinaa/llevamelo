import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncomiendaModel } from '../../models/encomineda-model';
import { RestServicesProvider } from '../../providers/rest-services/rest-services';
import { Servicio } from '../../models/servicio-model';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RecadoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recado-detalle',
  templateUrl: 'recado-detalle.html',
})
export class RecadoDetallePage {

  servicio:Servicio;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public restService:RestServicesProvider, private alertCtrl: AlertController,
    private authProvider: AuthProvider
  ) {
    this.servicio = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecadoDetallePage');
  }

  onSolicitarService(){
    this.restService.updateServicio(this.authProvider.currentUser.id, 2, this.servicio.id)
      .subscribe(data => {
        if(!data['isError']){
          let alert = this.alertCtrl.create({
            title: 'Exito!',
            message: data['response'].data,
            buttons: [  {
              text: 'Entendido',
              handler: () => {
                this.navCtrl.push('MenuTransportistaPage');
              }
            }]
          });
    
          alert.present();
        }
      }, error => {
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
