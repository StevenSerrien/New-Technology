import { RACES } from './mock';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Race } from './race';
/** transform the items emitted by an Observable by applying a function to each item */
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

/** Define this service as an injectable */
@Injectable()
export class RaceService {

  constructor (private http: Http) {}



  getRaces() {
    return this.http.get('app/races.json')
    .map(response => <Race[]>response.json().racesData );

  }

  getRacesfromMocks() {
    return RACES;
  }
}
