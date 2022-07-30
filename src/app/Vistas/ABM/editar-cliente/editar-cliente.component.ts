import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/api/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-editar-cliente',
	templateUrl: './editar-cliente.component.html',
	styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

	us = localStorage.getItem('usuario')!;
	usuario = JSON.parse(this.us);

	@Output() stat = new EventEmitter<boolean>();

	editForm = new FormGroup({
		user: new FormControl(this.usuario.nombre, Validators.required),
		surname: new FormControl(this.usuario.apellido, Validators.required),
		password: new FormControl(this.usuario.password, Validators.required),
		email: new FormControl(this.usuario.email, Validators.required),
		phone: new FormControl(this.usuario.telefono, Validators.required),
		address: new FormControl(this.usuario.direccion, Validators.required)
	})

	constructor(
		public cli: ClientesService,
		public snackBar: MatSnackBar
	) { }

	EditarCliente() {
		const user = this.editForm.get('user')!.value;
		const surname = this.editForm.get('surname')!.value;
		const password = this.editForm.get('password')!.value;
		const email = this.editForm.get('email')!.value;
		const phone = this.editForm.get('phone')!.value;
		const address = this.editForm.get('address')!.value;

		this.cli.clientesEditarClientePost$Json$Response({
			nombre: user || undefined,
			apellido: surname || undefined,
			contraseña: password || undefined,
			email: email || undefined,
			telefono: phone || undefined,
			direccion: address || undefined,
			id: this.usuario.id
		}).subscribe((res) => {
			if (res.status === 200) {
				this.usuario.nombre = user;
				this.usuario.apellido = surname;
				this.usuario.password = password;
				this.usuario.email = email;
				this.usuario.telefono = phone;
				this.usuario.direccion = address;
				localStorage.setItem('usuario', JSON.stringify(this.usuario));
				return this.stat.emit(true);
			} else {
				return this.stat.emit(false);
			}
		})
	}



}
