import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServiceReleve } from '../../providers/api-service-releve';
import { Releve } from '../../models/Releve';

/**
 * Generated class for the Releve page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-Releve',
  templateUrl: 'Releve.html',
  providers: [ApiServiceReleve]
})

export class RelevePage {
  Releve: Releve[];

  constructor(public navCtrl: NavController, public apiReleve: ApiServiceReleve) {
    apiReleve.load().subscribe(Releve => {
      this.Releve = Releve;
    });

   }

}
