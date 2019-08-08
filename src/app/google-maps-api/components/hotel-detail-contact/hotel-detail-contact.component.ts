import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component ({
  selector: 'detail-contact',
  styleUrls: ['hotel-detail-contact.component.scss'],
  template: `
    <ul>
      <li><img [src]="locationIcon"> {{ hotelDetail3.address }}</li>
      <li><img [src]="plusCodeIcon"> {{ hotelDetail3.plusCodes }} </li>
      <li><img [src]="webIcon"> {{ hotelDetail3.website }} </li>
      <li><img [src]="phoneIcon"> {{ hotelDetail3.phone }} </li>
    </ul>
  `
})

export class HotelDetailContactComponent {

  locationIcon: string = "//www.gstatic.com/images/icons/material/system_gm/2x/place_gm_blue_24dp.png";
  plusCodeIcon: string = "assets/plusCodes.png";
  webIcon: string = "//www.gstatic.com/images/icons/material/system_gm/2x/public_gm_blue_24dp.png";
  phoneIcon: string = "//www.gstatic.com/images/icons/material/system_gm/2x/phone_gm_blue_24dp.png";

  @Input() hotelDetail3: Hotel;
}