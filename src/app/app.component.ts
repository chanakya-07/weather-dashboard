import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  weatherData!:any;
  cityName: string = "Timisoara";

  url = `https://api.weatherapi.com/v1/current.json`;
  key = 'ebd317e8cbb14aa6ab6204524251801';
  

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
}

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
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
