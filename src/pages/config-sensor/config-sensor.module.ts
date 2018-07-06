import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigSensorPage } from './config-sensor';

@NgModule({
  declarations: [
    ConfigSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigSensorPage),
  ],
})
export class ConfigSensorPageModule {}
