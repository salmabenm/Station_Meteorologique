import { Component } from '@angular/core';
import { WeatherDetails } from '../../interfaces/weather-details.interface';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {

  currentIndex = 0;
  itemsPerPage = 4; 
  currentDate = new Date();
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  weatherList: WeatherDetails[] = [
    { heure: '09:00', temperature: 29, humidity: 60, windSpeed: 30 },
    { heure: '12:00', temperature: 27, humidity: 55, windSpeed: 25 },
    { heure: '15:00', temperature: 31, humidity: 65, windSpeed: 35 },
    { heure: '18:00', temperature: 25, humidity: 63, windSpeed: 28 },
    { heure: '20:00', temperature: 20, humidity: 55, windSpeed: 25 },
    { heure: '21:00', temperature: 18, humidity: 65, windSpeed: 20 },
    { heure: '22:00', temperature: 15, humidity: 68, windSpeed: 22 },
    { heure: '23:00', temperature: 14, humidity: 70, windSpeed: 26 },
    { heure: '03:00', temperature: 8, humidity: 55, windSpeed: 25 },
    { heure: '04:00', temperature: 10, humidity: 65, windSpeed: 20 },
    { heure: '05:00', temperature: 12, humidity: 68, windSpeed: 22 },
    { heure: '06:00', temperature: 13, humidity: 70, windSpeed: 26 },
   
  ];

  totalItems = this.weatherList.length;

  weathertoday: Weather[] = [
    {
      temperature: 28,
      humidity: 60,
      windSpeed: 30,
      date: {
        dayOfWeek: this.daysOfWeek[this.currentDate.getDay()],
        fullDate: `${this.currentDate.getDate()} ${this.months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`,
        year: this.currentDate.getFullYear(),
        time: this.currentDate.toLocaleTimeString(),
      },
    },
  ];

  get productGroup(): any[] {
    const start = this.currentIndex * this.itemsPerPage;
    const end = Math.min(start + this.itemsPerPage, this.totalItems);
    return this.weatherList.slice(start, end);
  }

  nextGroup() {
    if ((this.currentIndex + 1) * this.itemsPerPage < this.totalItems) {
      this.currentIndex++;
    }
  }

  prevGroup() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
