import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionarPeticionPage } from './gestionar-peticion';

@NgModule({
  declarations: [
    GestionarPeticionPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionarPeticionPage),
  ],
})
export class GestionarPeticionPageModule {}
