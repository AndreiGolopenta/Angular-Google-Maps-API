import { Component, OnInit } from '@angular/core';

import { Hotel } from '../../models/hotel.interface';

import { GoogleMapsApiService } from '../../google-maps-api.service';

@Component({
  selector: 'google-maps',
  styleUrls: ['google-maps.component.scss'],
  template: `
    <div class="app">
      <agm-map
        [latitude]="lat"
        [longitude]="lng"
        [zoom]="zoom"
        [ngStyle]="{ height: height, width: width }"
      >
        <map-marker
          *ngFor="let hotel of hotels"
          [detail]="hotel"
          (clickGoogleMarker)="handleClick($event)"
        >
        </map-marker>
      </agm-map>
      <div class="hotel-detail"
        [ngStyle]="{ height: height }">
        <hotel-detail [hotelInfo]="showHotelDetail"> </hotel-detail>
      </div>
      <div class="hotels-list">
        <h3>Hotels in Craiova</h3>
        <div
          [ngStyle]="{ height: heightOverflow }">
        <ul>
          <hotels-list
            *ngFor="let hotel of hotels"
            [hotelSelect]="hotel"
            (selectHotel)="handleAgmInfoWindow($event)"
            (resetSelection)="handleAgmInfoWindowReset($event)"
            (resetSelectionOnMouseOver)="handleAgmInfoWindowReset2($event)"
          >
          </hotels-list>
        </ul>
        </div>
      </div>
      <hotel-search (search)="handleSearch($event)"> </hotel-search>
    </div>
  `,
})
export class GoogleMapsComponent implements OnInit {
  hotels: Hotel[];

  constructor(private mapsService: GoogleMapsApiService) {}

  ngOnInit() {
    this.mapsService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  zoom: number = 13;
  lat: number = 44.32;
  lng: number = 23.8;
  height: string = `${window.innerHeight}px`;
  width: string = `${window.innerWidth - 708}px`;
  heightOverflow: string = `${window.innerHeight - 100}px`;
  idSelect: number;
  showHotelDetail: Hotel;
  openClose: boolean = false;

  handleAgmInfoWindow(event: boolean) {}

  // click hotel from list
  handleAgmInfoWindowReset(id: number) {
    if (id !== this.idSelect && this.openClose == false) {
      this.idSelect = id;
      this.hotels[id].displayInfo = true;
      this.resetInfoWindow();
      this.showHotelDetail = this.hotels[this.idSelect];
      // this.openClose = true;
    } else {
      this.hotels[this.idSelect].selected = false;
      this.idSelect = null;
      this.hotels[id].displayInfo = false;
      this.showHotelDetail = undefined;
    }
    this.openClose = false;
  }

  resetInfoWindow() {
    for (let i = 0; i < this.hotels.length; i++) {
      this.hotels[i].selected = false;
      this.hotels[i].displayInfo = false;
    }
    if (this.idSelect != undefined) {
      this.hotels[this.idSelect].selected = true;
      this.hotels[this.idSelect].displayInfo = true;
    }
  }

  // hover hotel from list
  handleAgmInfoWindowReset2(event: number) {
    this.resetInfoWindow();
    this.hotels[event].selected = true;
  }

  // click marker on map
  handleClick(id: number) {
    if (id !== this.idSelect && this.openClose == false) {
      this.handleAgmInfoWindowReset(id);
    } else {
      this.showHotelDetail = undefined;
      this.hotels[id].selected = false;
      this.hotels[id].displayInfo = false;
    }
  }

  handleSearch(value: string) {
    this.hotels.filter((data: Hotel) => {
      if (
        data.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !==
          -1 &&
        value !== ''
      ) {
        this.idSelect = data.id - 1;
        this.handleClick(this.idSelect);
        data.displayInfo = true;
        data.selected = true;
        this.showHotelDetail = data;
      } else {
        data.selected = false;
        data.displayInfo = false;
      }
    });
  }
}
