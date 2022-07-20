import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/api/services';
import { WeatherForecastService } from 'src/app/api/services';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


	nombre!: string;
	json!: any;

	constructor(
		public cli: ClientesService,
		public weather: WeatherForecastService,
		private http: HttpClient
	) {

		this.cli.clientesGet$Json$Response().subscribe(
			(data) => {
				console.log(data)
				this.json = JSON.parse(data.body);
				console.log(this.json);
				this.nombre = this.json.Table.nombre;
				console.log(this.nombre)
			}
		);
		
	}

	ngOnInit(): void { }

	loginForm = new FormGroup({
		user: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required)
	})

	Login() {
		console.log('Login');
	}

}
