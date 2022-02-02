import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { FormsModule } from '@angular/forms';
import { FilterByUserPrice } from './components/rooms/roomFilter';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    FilterByUserPrice
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
