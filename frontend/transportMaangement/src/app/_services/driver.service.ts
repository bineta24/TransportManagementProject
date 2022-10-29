import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';
const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(baseUrl + '/drivers');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/driver', data);
  }


  update(id: number, data: Driver): Observable<Driver> {
    return this.http.put(baseUrl + '/driver/' + `${id}`, data);
  }

  getOneDriver(id: number): Observable<Driver>{
    return this.http.get(baseUrl + '/driver/' + `${id}`)
  }
  
  delete(id: number): Observable<Driver> {
    return this.http.delete<Driver>(baseUrl + '/driver/' + `${id}`)
  }

  findByName(name: any): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${baseUrl}/driverName?name=${name}`)
   
  }
}
