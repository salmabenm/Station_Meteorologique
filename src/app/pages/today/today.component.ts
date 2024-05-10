import { Component } from '@angular/core';
import { WeatherDetails } from '../../interfaces/weather-details.interface';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {

  
  currentDate = new Date();
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  weatherList: WeatherDetails[] = [
    { heure: '09:00', temperature: 29, humidity: 60, windSpeed: 30 },
    { heure: '12:00', temperature: 27, humidity: 55, windSpeed: 25 },
    { heure: '15:00', temperature: 31, humidity: 65, windSpeed: 35 },
    { heure: '18:00', temperature: 25, humidity: 63, windSpeed: 28 },
  ];

 
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

}
