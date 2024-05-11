import { Component } from '@angular/core';
import { WeatherDays } from '../../interfaces/weather-days.interface';

@Component({
  selector: 'app-ten-days',
  templateUrl: './ten-days.component.html',
  styleUrl: './ten-days.component.css'
})
export class TenDaysComponent {
  weatherList: WeatherDays[] = [
    { date: '12 May', temperature: '28 ºC', humidity: '65 %', windSpeed: '25 Km/h' },
    { date: '13 May', temperature: '30 ºC', humidity: '60 %', windSpeed: '20 Km/h' },
    { date: '12 May', temperature: '28 ºC', humidity: '65 %', windSpeed: '25 Km/h' },
    { date: '13 May', temperature: '30 ºC', humidity: '60 %', windSpeed: '20 Km/h' },
    { date: '12 May', temperature: '28 ºC', humidity: '65 %', windSpeed: '25 Km/h' },
    { date: '13 May', temperature: '30 ºC', humidity: '60 %', windSpeed: '20 Km/h' },
    { date: '12 May', temperature: '28 ºC', humidity: '65 %', windSpeed: '25 Km/h' },
    { date: '13 May', temperature: '30 ºC', humidity: '60 %', windSpeed: '20 Km/h' },
    { date: '12 May', temperature: '28 ºC', humidity: '65 %', windSpeed: '25 Km/h' },
    { date: '13 May', temperature: '30 ºC', humidity: '60 %', windSpeed: '20 Km/h' },
  ];
}
