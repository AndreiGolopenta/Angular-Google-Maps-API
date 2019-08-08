import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hotel-search',
  styleUrls: ['google-maps-search.component.scss'],
  template: `
    <div>
      <input
        type="text"
        placeholder="Search..."
        #search
      />
      <button (click)="searchHotel(search.value)">
        <i class="material-icons">search</i>
      </button>
    </div>
  `,
})
export class GoogleMapsSearchComponent {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchHotel(value: string) {
    this.search.emit(value);
  }

}
