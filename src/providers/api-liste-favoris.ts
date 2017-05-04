import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Favoris } from '../models/favoris';


@Injectable()
export class ApiFavoris {
  ApiUrlfavoris = 'http://www.mocky.io/v2/58f784fa100000fa2124f1a8';


  constructor(public http: Http) { }
  /*getJsonData(){
    return this.http.get('http://www.mocky.io/v2/58f784fa100000fa2124f1a8').map(res => res.json());
  }*/
  load(): Observable<Favoris[]> {
  //console.log(this.ApiUrlPaysRegion);
    return this.http.get(`http://www.mocky.io/v2/58f784fa100000fa2124f1a8`)
      .map(res => <Favoris[]>res.json());
  }

}
