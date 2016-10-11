import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
/** Get modules for HTTP requests to an API */
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from "./app.component";
import { RacesComponent } from "./races.component";
import { RaceService }  from './race.service';




@NgModule({
  imports:        [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations:   [ AppComponent, RacesComponent ],
  providers:      [ RaceService ],
  bootstrap:      [ AppComponent ]
})
export class AppModule { }
