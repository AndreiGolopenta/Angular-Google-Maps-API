import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

// containers
import { GoogleMapsComponent } from './containers/google-maps/google-maps.component';

// components
import { GoogleMapsMarkerComponent } from './components/google-maps-marker/google-maps-marker.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelDetailImageComponent } from './components/hotel-detail-image/hotel-detail-image.component';
import { HotelDetailNameComponent } from './components/hotel-detail-name/hotel-detail-name.component';
import { HotelDetailContactComponent } from './components/hotel-detail-contact/hotel-detail-contact.component';
import { HotelDetailDescriptionComponent } from './components/hotel-detail-description/hotel-detail-description.component';
import { HotelDetailLogoComponent } from './components/hotel-detail-logo/hotel-detail-logo.component';
import { GoogleMapsSearchComponent } from './components/google-maps-search/google-maps-search.component';

// service
import { GoogleMapsApiService } from './google-maps-api.service';

// pipe
import { StarRatingPipe } from './star-rating.pipe';

@NgModule({
  declarations: [
    GoogleMapsComponent,
    GoogleMapsMarkerComponent,
    HotelsListComponent,
    HotelDetailComponent,
    StarRatingPipe,
    HotelDetailImageComponent,
    HotelDetailNameComponent,
    HotelDetailContactComponent,
    HotelDetailDescriptionComponent,
    HotelDetailLogoComponent,
    GoogleMapsSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'your_API_key'
    })
  ],
  exports: [
    GoogleMapsComponent
  ],
  providers: [
    GoogleMapsApiService
  ],
})
export class GoogleMapsApiModule {}
