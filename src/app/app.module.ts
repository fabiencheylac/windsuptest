import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { PrevisionPage } from '../pages/prevision/prevision';
import { RelevePage } from '../pages/releve/releve';
import { WebcamPage } from '../pages/webcam/webcam';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListeSpotPage } from '../pages/listespot/listespot';
import { SearchSpotPage } from '../pages/searchspot/searchspot';

import { ApiListeHome } from '../providers/api-liste-home';
import { ApiListeSpot } from '../providers/api-liste-spot';
import { ApiServicePrevision } from '../providers/api-service-prevision';
import { ApiServiceReleve } from '../providers/api-service-releve';
import { ApiPaysRegion } from '../providers/api-pays-region';
import { ApiFavoris } from '../providers/api-liste-favoris';


//import { Prevision } from '../models/prevision';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RelevePage,
    PrevisionPage,
    WebcamPage,
    TabsPage,
    ListeSpotPage,
    SearchSpotPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
    tabsPlacement: 'bottom',
    backButtonIcon: 'ion-arrow-left-c',
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RelevePage,
    PrevisionPage,
    WebcamPage,
    TabsPage,
    ListeSpotPage,
    SearchSpotPage
  ],
  providers: [

    ApiFavoris,
    ApiPaysRegion,
    ApiListeSpot,
    ApiListeHome,
    ApiServicePrevision,
    ApiServiceReleve,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
