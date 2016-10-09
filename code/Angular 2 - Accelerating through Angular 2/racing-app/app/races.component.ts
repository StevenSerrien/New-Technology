import { Component } from '@angular/core';
import { Race } from './race';
/** Not needed anymore. - import { RACES } from './mock'; */
/** Import the service to be make an instance of it later on in the constructor. */
import { RaceService } from './race.service';

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls:['app/races.component.css']
})
export class RacesComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races: Race[];

  /** Make an instance of service class RaceService to use its methods. */
  constructor(private raceService: RaceService){}

  ngOnInit() {
    this.races = this.raceService.getRaces();
  }

  totalCost() {
    let sum = 0;
    for (let race of this.races) {
      if (race.isRacing) sum += race.entryFee;
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }
  cancelRace(race){
    race.isRacing = false;
  }

  enterRace(race){
    if(this.cashLeft() > race.entryFee)
      {
        race.isRacing = true;
      }
    else
      {
        alert("You don't have enough cash.");
      }
  }

}
