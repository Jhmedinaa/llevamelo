import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecadoDetallePage } from './recado-detalle';

@NgModule({
  declarations: [
    RecadoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(RecadoDetallePage),
  ],
})
export class RecadoDetallePageModule {}
