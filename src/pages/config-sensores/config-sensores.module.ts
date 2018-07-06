import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigSensoresPage } from './config-sensores';

@NgModule({
  declarations: [
    ConfigSensoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigSensoresPage),
  ],
})
export class ConfigSensoresPageModule {}
