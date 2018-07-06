import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ConfigSensoresPage } from '../config-sensores/config-sensores';
/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');

  }

  valorarAplicacion(){
    //this.navCtrl.push(ConfigValorarPage);
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccione el que crea correcto');

    alert.addInput({
      type: 'radio',
      label: 'Excelente',
      value: '5',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Buena',
      value: '4'
    });

    alert.addInput({
      type: 'radio',
      label: 'Regular',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: 'Mala',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Pésima',
      value: '1'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  acercaDe(){
    //this.navCtrl.push(ConfigValorarPage);
    let alert = this.alertCtrl.create();
    alert.setTitle('Acerca de');
    alert.setSubTitle('Desarrollado por: Sergio Posada, Aldair Vargas, Juan Camilo Álvarez, Jaiver Castrillón.');

    alert.addButton({
      text: 'Ok'
    });

    alert.present();
  }

  verPoliticas(){
    //this.navCtrl.push(ConfigValorarPage);
    let alert = this.alertCtrl.create();
    alert.setTitle('Políticas de privacidad');
    alert.setSubTitle('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    alert.addButton({
      text: 'Ok'
    });

    alert.present();
  }

  configurarSensores(){
    this.navCtrl.push(ConfigSensoresPage);
  }

}
