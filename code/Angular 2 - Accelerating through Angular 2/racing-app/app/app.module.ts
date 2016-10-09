import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from "./app.component";
import { RacesComponent } from "./races.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations:      [ AppComponent, RacesComponent ],
  bootstrap:      [ AppComponent ]
})
export class AppModule { }
