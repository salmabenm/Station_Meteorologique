import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDetails } from '../../interfaces/weather-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  getAllWeatherData(): Observable<WeatherDetails[]> {
    return this.http.get<WeatherDetails[]>(this.apiUrl);
  }
}
