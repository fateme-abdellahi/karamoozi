import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from 'src/app/icurrent-weather';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Esfahan', 'IRAN')
      .subscribe((data) => (this.current = data));
  }
}
