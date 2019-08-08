import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../../models/hotel.interface';

@Component({
  selector: 'hotels-list',
  styleUrls: ['hotels-list.component.scss'],
  template: `
    <li
      (mouseover)="openInfo(hotelSelect.selected)"
      (mouseout)="closeInfo(hotelSelect.selected)"
      (click)="openInfoHotel()"
      [ngClass]="{ 'selected': hotelSelect.displayInfo }">
      {{ hotelSelect.id }} {{ hotelSelect.name }}
    </li>
  `
})

export class HotelsListComponent {

  selectedByClick: boolean = false;

  @Input() hotelSelect: Hotel;

  @Output() selectHotel: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() resetSelection: EventEmitter<number> = new EventEmitter<number>();

  @Output() resetSelectionOnMouseOver: EventEmitter<number> = new EventEmitter<number>();

  openInfo(val: boolean) {
    this.hotelSelect.selected = true;
    this.selectHotel.emit(this.hotelSelect.selected);
    this.resetSelectionOnMouseOver.emit(this.hotelSelect.id - 1);
  }

  closeInfo(val: boolean) {
    if (this.selectedByClick) {
      return
    } else {
      this.hotelSelect.selected = false;
      this.selectHotel.emit(this.hotelSelect.selected);
    }
  }

  openInfoHotel() {
    this.selectedByClick = true;
    this.resetSelection.emit(this.hotelSelect.id - 1);
  }

}