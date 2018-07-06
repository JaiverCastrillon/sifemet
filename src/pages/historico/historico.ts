import { Component, OnInit, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoricoInfoPage } from '../historico-info/historico-info';
import { InfosensoresProvider } from '../../providers/infosensores/infosensores';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})



export class HistoricoPage {
//  @Input() public cadena = "";

  //sensores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public infoSensores: InfosensoresProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  infoHistorico(sensor){
    this.navCtrl.push(HistoricoInfoPage, {sensor : sensor});
  }

}
