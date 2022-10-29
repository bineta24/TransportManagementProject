import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Branch } from '../models/branch';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }


  /*getAll(): Observable<Branch[]> {
    return this.http.get<Branch[]>(baseUrl);
  }

  get(id: any): Observable<Branch> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${baseUrl}?title=${title}`);
  }*/

  getAll(): Observable<Branch[]> {
    return this.http.get<Branch[]>(baseUrl + '/branch');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/manager/branch', data);
  }

  findByName(name: any): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${baseUrl}/branch/branchName?name=${name}`);
  }


  update(id: number, data: Branch): Observable<Branch> {
    return this.http.put(baseUrl + '/branch/' + `${id}`, data);
  }

  getOneBranch(id: number): Observable<Branch>{
    return this.http.get(baseUrl + '/branch/' + `${id}`)
  }
  
  delete(id: number): Observable<Branch> {
    return this.http.delete<Branch>(baseUrl + '/branch/' + `${id}`)
  }
 
  getBranchByuserId(id: number): Observable<Branch>{
    return this.http.get(baseUrl +'/branch/' + `${id}` + '/branch')
  }


}

