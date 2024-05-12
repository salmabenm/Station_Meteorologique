import { Component } from '@angular/core';
import { WeatherDays } from '../../interfaces/weather-days.interface';

@Component({
  selector: 'app-ten-days',
  templateUrl: './ten-days.component.html',
  styleUrl: './ten-days.component.css'
})
export class TenDaysComponent {

  currentPageIndex = 0;
  pageSize = 4;

  weatherList: WeatherDays[] = [
    { date: '12 May', temperature: 28, humidity: 65, windSpeed: 25 },
    { date: '13 May', temperature: 30, humidity: 60, windSpeed: 20 },
    { date: '14 May', temperature: 27, humidity: 70, windSpeed: 18 },
    { date: '15 May', temperature: 29, humidity: 63, windSpeed: 22 },
    { date: '16 May', temperature: 26, humidity: 72, windSpeed: 16 },
    { date: '17 May', temperature: 31, humidity: 58, windSpeed: 24 },
    { date: '18 May', temperature: 28, humidity: 68, windSpeed: 21 },
    { date: '19 May', temperature: 30, humidity: 62, windSpeed: 23 },
    { date: '20 May', temperature: 29, humidity: 66, windSpeed: 19 },
    { date: '21 May', temperature: 27, humidity: 71, windSpeed: 17 },
];

  getVisibleWeatherItems() {
    const startIndex = this.currentPageIndex * this.pageSize;
    return this.weatherList.slice(startIndex, startIndex + this.pageSize);
}

prevGroup() {
    if (this.currentPageIndex > 0) {
        this.currentPageIndex--;
    }
}

nextGroup() {
    const maxPageIndex = Math.ceil(this.weatherList.length / this.pageSize) - 1;
    if (this.currentPageIndex < maxPageIndex) {
        this.currentPageIndex++;
    }
}
}
