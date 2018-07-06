import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricoInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico-info',
  templateUrl: 'historico-info.html',
})
export class HistoricoInfoPage {
  sensor;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sensor = navParams.data.sensor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoInfoPage');
  }

}
