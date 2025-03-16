import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  weatherData!: any;
  cityName: string = 'Timisoara';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe(
      (data) => {
        if (data && data.current) {
          this.weatherData = data;
          console.log(this.weatherData);
        } else {
          console.error('Invalid data received from the API');
        }
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}