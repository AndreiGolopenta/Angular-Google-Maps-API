import { Component } from '@angular/core';

@Component({
  selector: 'logo-component',
  styleUrls: ['hotel-detail-logo.component.scss'],
  template: `
    <div>
      <img [src]="logo" />
      <div>
        <div>
          <i class="material-icons">info_outline</i> Use the map or the list to
        </div>
        <div>get info about a hotel.</div>
      </div>
    </div>
  `,
})
export class HotelDetailLogoComponent {
  logo: string =
    'https://cdn.searchenginejournal.com/wp-content/uploads/2016/06/Depositphotos_112394886_m-2015.jpg';
}
