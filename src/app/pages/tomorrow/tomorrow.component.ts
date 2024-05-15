import { Component, OnInit } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';
import { TomorrowService } from '../../services/tomorrowService/tomorrow.service';

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

  tomorrowData: Weather[]=[];

  constructor(private weatherService: TomorrowService) {
    this.tomorrowDate.setDate(this.currentDate.getDate() + 1);
  }

  ngOnInit() {

    
    this.weatherService.getTomorrowData().subscribe(data => {
      const weather: Weather= data; 
      weather.date = {
        dayOfWeek: this.daysOfWeek[this.tomorrowDate.getDay()],
        fullDate: `${this.tomorrowDate.getDate()} ${this.months[this.tomorrowDate.getMonth()]}`,
        year: this.tomorrowDate.getFullYear(),
        time: this.tomorrowDate.toLocaleTimeString(),
      },
      this.tomorrowData.push(weather); 
    });
    
  }
}

