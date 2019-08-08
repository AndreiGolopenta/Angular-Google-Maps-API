import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsApiModule } from './google-maps-api/google-maps-api.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsApiModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
