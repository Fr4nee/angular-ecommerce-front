import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/api/services';
import { WeatherForecastService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/api/services';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	nombre!: string;
	json!: any;
	login: boolean = true;

	loginForm = new FormGroup({
		user: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required)
	})
	
	signupForm = new FormGroup({
		user: new FormControl('', Validators.required),
		surname: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
		email: new FormControl('', Validators.required),
		phone: new FormControl('', Validators.required),
		address: new FormControl('', Validators.required)
	})

	constructor(
		public cli: ClientesService,
		public weather: WeatherForecastService,
		private router: Router,
		public loginServ: LoginService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit(): void {}

	ChangeFunction() {
		return this.login = false;
	}

	Login() {
		const user = this.loginForm.get('user')!.value;
		const password = this.loginForm.get('password')!.value;

		this.loginServ.loginValidoLoginGet$Json$Response({
			nombre: user || undefined,
			contraseña: password || undefined,
		}).subscribe((res) => {
			if (res.body == true) {	
				this.cli.clientesDevolverClienteGet$Response({
					nombre: user || undefined,
					contraseña: password || undefined,
				}).subscribe((res) => {
					console.log(res);
					let result: any = res.body;
					console.log(result);
					let json = JSON.parse(result)

					console.log(json);
					
					// const usuario = {
					// 	nombre: this.json.nombre,
					// 	apellido: ,
					// 	email: ,
					// 	telefono: ,
					// 	direccion: ,
					// }
					// localStorage.setItem('usuario', JSON.stringify(usuario));
					console.log(localStorage.getItem('user'));
				})
				this.router.navigate(['Ecommerce/PaginaPrincipal']);
			} else {
				this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar');
			}
		})
	}


	SignUp() {
		const user = this.signupForm.get('user')!.value;
		const surname = this.signupForm.get('surname')!.value;
		const password = this.signupForm.get('password')!.value;
		const email = this.signupForm.get('email')!.value;
		const phone = this.signupForm.get('phone')!.value;
		const address = this.signupForm.get('address')!.value;

		this.cli.clientesRegistrarClientePost$Response({
			nombre: user || undefined,
			apellido: surname || undefined,
			email: email || undefined,
			telefono: phone || undefined,
			direccion: address || undefined,
			contraseña: password || undefined,
		}).subscribe((res) => {
			console.log(res);
			this.login = true;
		})
	}





}
