import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigSensorPage } from '../config-sensor/config-sensor';
import { InfosensoresProvider } from '../../providers/infosensores/infosensores';

/**
 * Generated class for the ConfigSensoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-sensores',
  templateUrl: 'config-sensores.html',
})
export class ConfigSensoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public infoSensores: InfosensoresProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigSensoresPage');
  }

  configurarSensor(sensor){
    this.navCtrl.push(ConfigSensorPage, {sensor : sensor});
  }

}
