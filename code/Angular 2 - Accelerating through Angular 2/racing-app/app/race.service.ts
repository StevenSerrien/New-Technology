import { RACES } from './mock';
import { Injectable } from '@angular/core';

/** Define this service as an injectable */
@Injectable()
export class RaceService {
  getRaces() {
    return RACES;
  }
}
