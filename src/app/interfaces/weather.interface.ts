export interface Weather {
  'Rel Hum_%': number;
  'Temp_C': number;
  'Wind Speed_km/h': number;
  date: {
    dayOfWeek: string;
    fullDate: string;
    year: number;
    time: string;
  };
}