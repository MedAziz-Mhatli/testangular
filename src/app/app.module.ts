import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { ChercherVideosComponentComponent } from './chercher-videos-component/chercher-videos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddvideoComponent,
    ChercherVideosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
