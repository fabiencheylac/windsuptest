import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ListeHome } from '../models/listehome';
//import { datalistespot } from '../data/listeSpot'

@Injectable()
export class ApiListeHome {
ApiUrlListe = 'http://www.mocky.io/v2/58fdee020f0000d21008b9bb';
//ApiUrlListe= datalistespot.data

  constructor(public http: Http) { }

  load(): Observable<ListeHome[]> {
    return this.http.get(`${this.ApiUrlListe}`)
      .map(res => <ListeHome[]>res.json());
  }
}
