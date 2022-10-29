import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  /*getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(baseUrl + '/contact');
  }*/

  create(data: Contact): Observable<Contact> {
    return this.http.post(baseUrl + '/contact', data);
  }
}
