import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {InfosensoresProvider } from '../../providers/infosensores/infosensores';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public prov: InfosensoresProvider) {
  }

  cargarImagen(){
    //this.prov.sensorx.nombre = "hola, es mi nuevo nombre";
    //alert(this.prov.sensorx.nombre);
  }
}
