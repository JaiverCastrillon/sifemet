import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficasPage } from './graficas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    GraficasPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(GraficasPage),
  ],
})
export class GraficasPageModule {}
