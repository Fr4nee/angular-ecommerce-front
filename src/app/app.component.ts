import { Component } from '@angular/core';
import { WeatherForecastService } from './api/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'app';
	weather: any;



	constructor (
		private weatherForecastService: WeatherForecastService
	) {
		this.weatherForecastService.getWeatherForecast$Json$Response({
			// params
		})
			.subscribe((res) => {
				console.log(res);

				for (let i = 0; i < res.body.length; i++) {

				}

				console.log(this.weather)
			});

	}
}
