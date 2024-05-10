export interface Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  date: {
    dayOfWeek: string;
    fullDate: string;
    year: number;
    time: string;
  };
}