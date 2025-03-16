import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ebd317e8cbb14aa6ab6204524251801'; 
  private baseUrl = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}


  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`; // Use HTTPS here
    return this.http.get(url);
  }
}
