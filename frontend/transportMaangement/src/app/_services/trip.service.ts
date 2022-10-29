import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(baseUrl + '/trips');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/trip', data);
  }


  update(id: number, data: Trip): Observable<Trip> {
    return this.http.put(baseUrl + '/trip/' + `${id}`, data);
  }

  getOneTrip(id: number): Observable<Trip>{
    return this.http.get(baseUrl + '/trip/' + `${id}`)
  }
  
  delete(id: number): Observable<Trip> {
    return this.http.delete<Trip>(baseUrl + '/trip/' + `${id}`)
  }
}
