import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiServicePrevision } from '../../providers/api-service-prevision';
import { Prevision } from '../../models/prevision';


@Component({
  selector: 'page-prevision',
  templateUrl: 'prevision.html',
  providers: [ ApiServicePrevision ]
})

export class PrevisionPage {
  Prevision: Prevision[]
  

  constructor(public navCtrl: NavController, public apiprevision: ApiServicePrevision) {


}
ngOnInit(apiprevision, Prevision){
this.apiprevision.load().subscribe(Prevision => {
  this.Prevision = Prevision;

})

}
}
