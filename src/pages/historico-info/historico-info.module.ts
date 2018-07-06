import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoInfoPage } from './historico-info';

@NgModule({
  declarations: [
    HistoricoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoInfoPage),
  ],
})
export class HistoricoInfoPageModule {}
