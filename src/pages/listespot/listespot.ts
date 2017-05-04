import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';
import { ApiListeSpot } from '../../providers/api-liste-spot';
import { ListeSpot } from '../../models/listeSpot';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-listespot',
  templateUrl: 'listespot.html',
  providers: [ ApiListeSpot ]
})

export class ListeSpotPage {
ListesSpot: ListeSpot[];



constructor(public navCtrl: NavController,public pops: PopoverController, public apilistespot:ApiListeSpot) {
    apilistespot.load().subscribe(ListesSpot => {
      this.ListesSpot = ListesSpot;
    })

  }

  afficherspot(id) {
    this.navCtrl.push(TabsPage,id);
  }


}
