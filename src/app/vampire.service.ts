import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VampireService {

  private apiUrl = 'http://localhost:8080/rest/vampire';

  constructor(private http: HttpClient) {}

  createRandom(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {withCredentials : true});
  }

  deleteAlls(): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete/${id}`);
  }
}
