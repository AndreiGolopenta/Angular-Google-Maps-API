import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'detail-name',
  styleUrls: ['hotel-detail-name.component.scss'],
  template: `
    <h3>{{ hotelDetail2.name }}</h3>
    <div class="name-rating-star">
      <span class="rating-number">{{ hotelDetail2.ratingNumber }}</span>
      <div class="stars">
        <ng-container
          *ngFor="let star of 's'.repeat(hotelDetail2.ratingNumber).split('')"
        >
          <i class="material-icons">star</i>
        </ng-container>
        <ng-container *ngIf="hotelDetail2.ratingNumber | starRating">
          <i class="material-icons">star_half</i>
        </ng-container>
        <span class="reviews-number"
          >({{ hotelDetail2.reviewsNumber }}) / {{ hotelDetail2.stars }}</span
        >
      </div>
    </div>
  `,
})
export class HotelDetailNameComponent {
  @Input() hotelDetail2: Hotel;
}
