import { Component, Input } from '@angular/core';
import { Race } from './race';
import { RaceScore } from './raceScore';
import { RaceScoreService } from './raceScore.service';


@Component({
  selector: "scoreboard-item",
  template: `
  <div class='scoreboard-item'>
  <h2>{{race.name}}</h2>
  <p></p>
  <ol>
  <li>
  </li>
  </ol>
  </div>
  `
})
export class ScoreboardItemComponent {
  //Only one race needed, not an array like scoreboard.component
  @Input() race: Race;

  constructor(private raceScoreService: RaceScoreService) { }

  // ngOnInit() {
  //   this.raceService.getRaces()
  //       .subscribe(data => this.races = data);
  // }
}
