import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';


import { ApiListeSpot } from '../../providers/api-liste-spot';

import { ListeSpot } from '../../models/listespot';

import { TabsPage } from '../tabs/tabs';
//import { ng2-countries } from '../../'

@Component({
  selector: 'page-searchspot',
  templateUrl: 'searchspot.html',
  providers: [ ApiListeSpot]
})

export class SearchSpotPage {
ListeSpot: ListeSpot[];
searchQuery:string;
nomspot: string[];
initListeSpot: ListeSpot[];

constructor(public navCtrl: NavController,public pops: PopoverController,public apilisteSpot: ApiListeSpot) {
//this.initializelistSpot();


  }

  afficherspot(id) {
    this.navCtrl.push(TabsPage,id);
  }

  ngOnInit(apilisteSpot) {
    this.apilisteSpot.load().subscribe(data =>{
         this.ListeSpot = data;
         this.initListeSpot =data;
      });
   }
   initlist(){
     this.initListeSpot= this.ListeSpot;
   }

   getItems(ev: any) {
     // Reset items back to all of the items
     this.initlist();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
       this.initListeSpot = this.initListeSpot.filter((spot) => {
         return (spot.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
}
