import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { PaysRegion } from '../models/paysregion';


@Injectable()
export class ApiPaysRegion {
  ApiUrlPaysRegion = 'http://www.mocky.io/v2/58f784fa100000fa2124f1a8';


  constructor(public http: Http) { }

  load(): Observable<PaysRegion[]> {
  //console.log(this.ApiUrlPaysRegion);
    return this.http.get(`${this.ApiUrlPaysRegion}`)
      .map(res => <PaysRegion[]>res.json());
  }

}
