import { Component, OnInit } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrl: './tomorrow.component.css'
})
export class TomorrowComponent implements OnInit {

  currentDate = new Date();
  tomorrowDate = new Date(this.currentDate);
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  weathertomorrow: Weather[] = [];

  constructor() {
    this.tomorrowDate.setDate(this.currentDate.getDate() + 1);
  }

  ngOnInit() {
    this.weathertomorrow.push({
      temperature: 30,
      humidity: 65,
      windSpeed: 25,
      date: {
        dayOfWeek: this.daysOfWeek[this.tomorrowDate.getDay()],
        fullDate: `${this.tomorrowDate.getDate()} ${this.months[this.tomorrowDate.getMonth()]}`,
        year: this.tomorrowDate.getFullYear(),
        time: this.tomorrowDate.toLocaleTimeString(),
      },
    });
  }
}

