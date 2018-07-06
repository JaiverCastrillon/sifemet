import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/*
  Generated class for the InfosensoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfosensoresProvider {
  sensores = []


  constructor(public http: HttpClient) {
    this.crearSensores();
  }

  imprimirHola(){
    alert("Hola");
  }

  crearSensores(){
    for (var i = 0; i < this.getAleatorio(20, 30); i++){
      this.sensores.push(this.crearSensor(i));
    }
  }

  crearSensor(num){
    var ubicaciones = ['Manizales','Chinchiná', 'Neira', 'Palestina', 'Villamaría', 'Filadelfia',
      'La Merced', 'Marmato', 'Riosucio', 'Supía', 'Manzanares', 'Marquetalia', 'Marulanda', 'Pensilvania',
      'Anserma', 'Belalcazár', 'Risaralda', 'San José', 'Viterbo', 'La Dorada', 'Norcasia', 'Samaná',
      'Victoria', 'Aguadas', 'Aranzazu', 'Pácora', 'Salamina'];
    var tecnicos = ['Jaiver Castrillón', 'Sergio Posada', 'Camilo Álvarez', 'Aldair Vargas'];

    var registros = [];

    for (let i = 0; i < 31; i++){
      registros.push({
        'fecha':''+(i+1)+'/06/17',
        'hora': '13:00',
        'T':''+this.getAleatorioDouble(14, 35).toFixed(3),
        'H':''+this.getAleatorioDouble(80, 95).toFixed(3),
        'V':''+this.getAleatorioDouble(2, 4).toFixed(3)
      });
    }

    var sensor = {
      'nombre':'sensor ' + num,
      'fechaInstalado':''+this.getAleatorio(1,30)+'/'+this.getAleatorio(1,12)+'17',
      'ubicacion': ubicaciones[this.getAleatorio(0,27)],
      'latitud':''+ this.getAleatorio(-90,90),
      'longitud':''+ this.getAleatorio(-90,90),
      'tecnico':''+tecnicos[this.getAleatorio(0, 4)],
      'registros':registros
    }
    return sensor;
  }

  getAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getAleatorioDouble(min, max) {
    return (Math.random() * (max - min)) + min;
  }
}
