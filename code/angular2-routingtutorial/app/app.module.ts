import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardItemComponent } from './scoreboardItem.component';
import { AboutComponent } from './about.component';

import { RaceService } from './race.service';
import { RaceScoreService } from './raceScore.service';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
      { path: '', component: AboutComponent},
      { path: 'schedule', component: RacesComponent},
      { path: 'scoreboard', component: ScoreboardComponent}
    ])
  ],
  declarations: [
    AppComponent,
    RacesComponent,
    AboutComponent,
    ScoreboardComponent,
    ScoreboardItemComponent
  ],
  providers: [
    RaceService,
    RaceScoreService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
