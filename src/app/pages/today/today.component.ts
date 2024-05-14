import { Component, OnInit } from '@angular/core';
import { WeatherDetails } from '../../interfaces/weather-details.interface';
import { Weather } from '../../interfaces/weather.interface';
import { TodayService } from '../../services/todayService/today.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  currentIndex = 0;
  itemsPerPage = 4; 
  currentDate = new Date();
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  message: string = '';
  weatherList: WeatherDetails[] = [];
  totalItems = 0;

  constructor(private weatherService: TodayService) { }

  ngOnInit(): void {
    this.weatherService.getAllWeatherData().subscribe(data => {
      this.weatherList = data;
      this.totalItems = this.weatherList.length;
      console.log("data", this.weatherList);
    });
  }

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
