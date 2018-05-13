import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { RoomModule } from './room/room.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';


// import { RoomService } from './../services/room.service';

@NgModule({
  declarations: [
    AppComponent, NavigationComponent, routingComponents
  ],
  imports: [
    BrowserModule, FormsModule, RoomModule, AppRoutingModule
  ],
  providers: [ ],  // We removed our Room Service
  bootstrap: [ AppComponent ]
})

export class AppModule { }
