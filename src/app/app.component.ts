import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AltaServicePage } from '../pages/alta-service/alta-service';

import { ResultadosPage } from '../pages/resultados/resultados';
import { UserPage } from '../pages/user/user';
import { ReputationPage } from '../pages/reputation/reputation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = ResultadosPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: 'Home', component: ResultadosPage },
        { title: 'Mi cuenta', component: UserPage },
        { title: 'Publicar', component: AltaServicePage },
        { title: 'Reputación', component: ReputationPage }
      ];
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

