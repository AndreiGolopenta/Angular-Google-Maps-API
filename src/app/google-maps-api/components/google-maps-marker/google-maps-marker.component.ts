import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'map-marker',
  styles: [` span { font-weight: 500; } `],
  template: `
    <agm-marker
      [latitude]="detail.latitude"
      [longitude]="detail.longitude"
      (markerClick)="clickOnMarker()">
      <agm-info-window [isOpen]="detail.selected">
        <span>{{ detail.name }}</span>
      </agm-info-window>
    </agm-marker>
  `,
})
export class GoogleMapsMarkerComponent {

  @Input() detail: Hotel;

  @Output() clickGoogleMarker: EventEmitter<number> = new EventEmitter<number>();

  clickOnMarker() {
    this.clickGoogleMarker.emit(this.detail.id - 1);
  }
  
}
