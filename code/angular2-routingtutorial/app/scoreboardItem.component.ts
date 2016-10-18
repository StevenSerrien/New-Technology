import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Race } from './race';
import { RaceScore } from './raceScore';
import { RaceScoreService } from './raceScore.service';


@Component({
  selector: "scoreboard-item",
  styleUrls:['app/scoreboardItem.component.css'],
  template: `
  <div class='scoreboard-item' [class.finished]="score.currentLap >= score.totalLaps" *ngIf="score">
  <h2>{{race.name}}</h2>
  <p>{{score.currentLap}} of {{score.totalLaps}}</p>
  <ol>
  <li *ngFor="let racer of score.racers">
    {{racer}}
  </li>
  </ol>
  </div>
  `
})
export class ScoreboardItemComponent {
  //Only one race needed, not an array like scoreboard.component
  @Input() race: Race;
  @Output() notification: EventEmitter<string> = new EventEmitter<string>();

  score: RaceScore;

  constructor(private raceScoreService: RaceScoreService) { }

  ngOnInit() {
    this.raceScoreService.getScoreForRace(this.race.id)
        .subscribe(data => this.score = data);
  }

  checkforNotification(newScore){
    if (newScore.currentLap >= newScore.totalLaps) {
      this.notification.emit(`The ${this.race.name} race has finished and ${newScore.race[0]}`)
    }

    if (this.score && newScore.racers[0] != this.score.racers[0]) {
        this.notification.emit(`${newScore.racers[0]} has taken the lead in the ${this.race}`)
    }
  }
}
