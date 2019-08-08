import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'detail-image',
  styleUrls: ['hotel-detail-image.component.scss'],
  template: `
    <img
      [src]="hotelDetail1.image.link"
      [ngStyle]="{
        height: hotelDetail1.image.height,
        width: hotelDetail1.image.width,
        top: hotelDetail1.image.top,
        left: hotelDetail1.image.left
      }"
    />
  `,
})
export class HotelDetailImageComponent {

  @Input() hotelDetail1: Hotel;
}
