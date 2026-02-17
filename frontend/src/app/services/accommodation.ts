import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Accommodation {
  id?: string;
  name: string;
  address: string;
  availableRooms: number;
  price: number;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private apiUrl = 'http://localhost:8080/api/accommodations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.apiUrl);
  }
}
