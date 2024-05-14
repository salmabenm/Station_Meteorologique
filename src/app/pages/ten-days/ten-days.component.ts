import { Component } from '@angular/core';
import { WeatherDays } from '../../interfaces/weather-days.interface';
import { TenDaysService } from '../../services/tendaysService/ten-days.service';

@Component({
  selector: 'app-ten-days',
  templateUrl: './ten-days.component.html',
  styleUrl: './ten-days.component.css'
})
export class TenDaysComponent {
  
  weatherList: WeatherDays[] = [];
  currentPageIndex = 0;
  pageSize = 4;
  totalItems = 0;

  constructor(private weatherService: TenDaysService) { }

  ngOnInit(): void {
    this.weatherService.getTenDaysWeather().subscribe(data => {
      this.weatherList = data;
      console.log("data",this.weatherList)
      this.totalItems = this.weatherList.length;
    });
  }

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
      const maxPageIndex = Math.ceil(this.totalItems / this.pageSize) - 1;
      if (this.currentPageIndex < maxPageIndex) {
          this.currentPageIndex++;
      }
  }
}
