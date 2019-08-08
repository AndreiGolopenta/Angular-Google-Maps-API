import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './models/hotel.interface';

const HOTEL_API: string = 'http://localhost:3000/hotels';

export class GoogleMapsApiService {
  
  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(HOTEL_API);
  }
}
