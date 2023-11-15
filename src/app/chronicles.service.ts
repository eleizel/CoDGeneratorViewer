// mortal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MortalService {
  private apiUrl = 'http://localhost:8080/rest/mortal';

  constructor(private http: HttpClient) {}

  createRandomMortal(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  getMortalById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllMortals(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {withCredentials : true});
  }

  deleteAllMortals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete`);
  }

  deleteMortalById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete/${id}`);
  }
}
