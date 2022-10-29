import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Truck[]> {
    return this.http.get<Truck[]>(baseUrl + '/trucks');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/truck', data);
  }

  findByName(name: any): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${baseUrl}/TruckName?name=${name}`);
  }

  update(id: number, data: Truck): Observable<Truck> {
    return this.http.put(baseUrl + '/truck/' + `${id}`, data);
  }

  getOneTruck(id: number): Observable<Truck>{
    return this.http.get(baseUrl + '/truck/' + `${id}`)
  }
  
  delete(id: number): Observable<Truck> {
    return this.http.delete<Truck>(baseUrl + '/truck/' + `${id}`)
  }
  findByNo(no: any): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${baseUrl}/truckNo?no=${no}`)
   
  }
  
}
