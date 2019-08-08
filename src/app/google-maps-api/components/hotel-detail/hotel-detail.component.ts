import { Component, Input } from '@angular/core';

import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'hotel-detail',
  styleUrls: ['hotel-detail.component.scss'],
  template: `
    <div>
      <logo-component 
        *ngIf="hotelInfo == undefined">
      </logo-component>
      <ng-container *ngIf="hotelInfo != undefined">
        <div class="image">
          <detail-image 
            [hotelDetail1]="hotelInfo">
          </detail-image>
        </div>
        <div class="info"
          [ngStyle]="{ height: height, overflowX: 'hidden', overflowY: 'auto' }">
          <detail-name
            [hotelDetail2]="hotelInfo">
          </detail-name>
            <div class="location-web-tel">
              <detail-contact
                [hotelDetail3]="hotelInfo">
              </detail-contact>
            </div>
            <div class="hotel-description">
              <detail-description
                [hotelDetail4]="hotelInfo">
              </detail-description>
            </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class HotelDetailComponent {
  @Input() hotelInfo: Hotel;

  height: string = `${window.innerHeight - 240}px`;
}
