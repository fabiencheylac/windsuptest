import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

//import { ApiPaysRegion } from '../../providers/api-pays-region';
//import { ApiFavoris } from '../../providers/api-liste-favoris';
import { ApiListeHome } from '../../providers/api-liste-home';


import { ListeSpotPage } from '../listespot/listespot';

//import { PaysRegion } from '../../models/paysregion';
//import { Favoris } from '../../models/favoris';
import { ListeHome } from '../../models/listehome';

import { SearchSpotPage } from '../searchspot/searchspot'
import { TabsPage } from '../tabs/tabs';
//import { ng2-countries } from '../../'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ApiListeHome ]
})

export class HomePage {

ListeHome: ListeHome[];

searchQuery:string;
nomspot: string[];
ListSpotInit=[];

constructor(public navCtrl: NavController,public pops: PopoverController,public apilistehome: ApiListeHome) {

    this.apilistehome.load().subscribe(ListeHome => {
      this.ListeHome = ListeHome;
    })

  }

/*
ngOnInit(apipaysregion, apifavoris, apilistehome) {

  this.apipaysregion.load().subscribe(PaysRegion => {
    this.PaysRegion = PaysRegion;
  });
  this.apifavoris.load().subscribe(Favoris => {
    this.Favoris = Favoris;
  });
  ListeHome=this.Favoris.concact(this.PaysRegion);
}
*/

  toggleDetails(ListeHome) {
    if (ListeHome.showDetails) {
      ListeHome.showDetails = false;
      ListeHome.icon = 'ion-chevron-right';
    } else {
      ListeHome.showDetails = true;
      ListeHome.icon = 'ion-chevron-down';
    }
  }

  afficherspot(id) {
    this.navCtrl.push(TabsPage,id);
  }

  afficherlistespot(id) {
    this.navCtrl.push(ListeSpotPage,id);
  }
  searchspotpage() {
    this.navCtrl.push(SearchSpotPage);
  }

}
