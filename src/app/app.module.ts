import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { MapaPage } from '../pages/mapa/mapa';
import { PerfilPage } from '../pages/perfil/perfil';
import { HistoricoPage } from '../pages/historico/historico';
import { PrediccionesPage } from '../pages/predicciones/predicciones';
import { GraficasPage } from '../pages/graficas/graficas';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { HistoricoInfoPage } from '../pages/historico-info/historico-info';
import { ConfigValorarPage } from '../pages/config-valorar/config-valorar';
import { ConfigSensoresPage } from '../pages/config-sensores/config-sensores';
import { ConfigSensorPage } from '../pages/config-sensor/config-sensor';

import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from '@ionic-native/google-maps';
import { InfosensoresProvider } from '../providers/infosensores/infosensores';



//import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    PerfilPage,
    HistoricoPage,
    PrediccionesPage,
    GraficasPage,
    ConfiguracionPage,
    MiPerfilPage,
    HistoricoInfoPage,
    ConfigValorarPage,
    ConfigSensoresPage,
    ConfigSensorPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    PerfilPage,
    HistoricoPage,
    PrediccionesPage,
    GraficasPage,
    ConfiguracionPage,
    MiPerfilPage,
    HistoricoInfoPage,
    ConfigValorarPage,
    ConfigSensoresPage,
    ConfigSensorPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InfosensoresProvider
  ]
})
export class AppModule {}
