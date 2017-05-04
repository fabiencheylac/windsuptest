import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ListeSpot } from '../models/listespot';
//import { datalistespot } from '../data/listeSpot'

@Injectable()
export class ApiListeSpot {
ApiUrlListe = 'http://www.mocky.io/v2/58fa032e1100004719d21050';
//ApiUrlListe= datalistespot.data

  constructor(public http: Http) { }

  load(): Observable<ListeSpot[]> {
    return this.http.get(`${this.ApiUrlListe}`)
      .map(res => <ListeSpot[]>res.json());
  }
}
