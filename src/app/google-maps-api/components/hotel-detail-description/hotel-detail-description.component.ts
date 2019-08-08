import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'detail-description',
  styleUrls: ['hotel-detail-description.component.scss'],
  template: `
    <h4>Hotel details</h4>
    <div>{{ hotelDetail4.detail }}</div>
  `,
})

export class HotelDetailDescriptionComponent {
  @Input() hotelDetail4: Hotel;
}
