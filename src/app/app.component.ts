import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapaPage } from '../pages/mapa/mapa';
import { PerfilPage } from '../pages/perfil/perfil';
import { HistoricoPage } from '../pages/historico/historico';
import { PrediccionesPage } from '../pages/predicciones/predicciones';
import { GraficasPage } from '../pages/graficas/graficas';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

//import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';


//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapaPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mapa', component: MapaPage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Histórico', component: HistoricoPage },
      { title: 'Predicciones', component: PrediccionesPage },
      { title: 'Gráficas', component: GraficasPage },
      { title: 'Configuración', component: ConfiguracionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
