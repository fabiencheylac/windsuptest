import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Prevision } from '../models/prevision';

@Injectable()
export class ApiServicePrevision {
  ApiUrlPrevision = 'http://www.mocky.io/v2/590310771100005c0d975dee';

  constructor(public http: Http) { }


  load(): Observable<Prevision[]> {
    return this.http.get(`${this.ApiUrlPrevision}`)
      .map(res => <Prevision[]>res.json());
  }
}
