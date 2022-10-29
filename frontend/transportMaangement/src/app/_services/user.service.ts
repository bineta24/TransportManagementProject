import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  

  getAllManger():Observable<any>{
    return this.http.get(API_URL + 'admin/users')
  }

  getOneUser(id: any): Observable<any>{
    return this.http.get(API_URL + 'users/' + `${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(API_URL + 'user/' + `${id}`, data);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${API_URL}${id}`);
  }

  findByFirstname(firstname: any): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}userFirstname?firstname=${firstname}`);
   
  }
}
