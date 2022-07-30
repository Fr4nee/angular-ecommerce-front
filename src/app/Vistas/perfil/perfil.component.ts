import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/api/services';
import { EditarClienteComponent } from '../ABM/editar-cliente/editar-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	us = localStorage.getItem('usuario')!;
	usuario = JSON.parse(this.us);
	listaClientes: any[] = [];

	constructor(
		public cli: ClientesService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar

	) { 
		this.ListarClientes();
	}

	ngOnInit(): void { }


	EditarCliente() {
		const dialog = this.dialog.open(EditarClienteComponent, {
			width: '500px',
		})

		dialog.componentInstance.stat.subscribe((res) => {
			if (res) {
				this.snackBar.open('Cliente editado correctamente', 'Cerrar', {
					duration: 3000
				});
				this.us = localStorage.getItem('usuario')!
				this.usuario = JSON.parse(this.us);
				dialog.close()
			} else {
				this.snackBar.open('Error al editar el cliente', 'Cerrar', {
					duration: 3000
				});
			}
		})
		
	}

	ListarClientes() {
		this.cli.clientesListarClientesGet$Response({})
		.subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let usuario = JSON.parse(jsonString)[0];
			console.log(usuario) 

			usuario.forEach((e: any) => {
				this.listaClientes.push(e);
			});
		})
	}

}
