import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class TomorrowService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  getTomorrowData(): Observable<Weather> {
    return this.http.get<Weather>(`${this.apiUrl}/tomorrow`);
  }
  
}
