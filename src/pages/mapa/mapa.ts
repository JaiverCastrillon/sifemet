import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { InfosensoresProvider } from '../../providers/infosensores/infosensores';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, public prov: InfosensoresProvider) {

  }

  ionViewDidLoad(){
    //this.loadMap();
  }

  prueba(){
//    alert(this.prov.sensorx.nombre);
  }
  loadMap(){

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904, // default location
          lng: -89.3809802 // default location
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      // Now you can use all methods safely.
      this.getPosition();
    })
    .catch(error =>{
      console.log(error);
    });

  }

  getPosition(): void{
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: 'My Position',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }


}




//ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyCXUnDj0THtQJVWS5nulcqzQGzCO0FBAsY" --variable API_KEY_FOR_IOS="AIzaSyCXUnDj0THtQJVWS5nulcqzQGzCO0FBAsY" --save
