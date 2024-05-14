import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDays } from '../../interfaces/weather-days.interface';

@Injectable({
  providedIn: 'root'
})
export class TenDaysService {

  private apiUrl = 'http://localhost:5000/ten_days';

  constructor(private http: HttpClient) { }

  getTenDaysWeather(): Observable<WeatherDays[]> {
    return this.http.get<WeatherDays[]>(this.apiUrl);
  }
}
