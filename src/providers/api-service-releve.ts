import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Releve } from '../models/releve';

@Injectable()
export class ApiServiceReleve {
  ApiUrlReleve = 'http://www.mocky.io/v2/590345511100007d17975e40';

  constructor(public http: Http) { }


  load(): Observable<Releve[]> {
    return this.http.get(`${this.ApiUrlReleve}`)
      .map(res => <Releve[]>res.json());
  }
}
