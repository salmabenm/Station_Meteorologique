import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  private baseUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/`);
  }
}
