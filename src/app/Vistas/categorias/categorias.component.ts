import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/api/services';
import { Categoria } from 'src/app/api/models/categorias-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AgregarCategoriaComponent } from '../ABM/agregar-categoria/agregar-categoria.component'; 
import { EditarCategoriaComponent } from '../ABM/editar-categoria/editar-categoria.component'; 
import { CategoriasServicioService } from 'src/app/Servicios/categoria-servicio.service';

@Component({
	selector: 'app-categorias',
	templateUrl: './categorias.component.html',
	styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

	dataSource: Categoria[] = [];
	displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'botones'];

	constructor(
		public cat: CategoriasService,
		public catServ: CategoriasServicioService,
		public snackbar: MatSnackBar,
		public dialog: MatDialog
	) {
		this.ListarCategorias();
	}

	ngOnInit(): void { }

	ListarCategorias() {
		this.cat.listarCategoriasGet$Response({
		}).subscribe((res) => {
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let categorias = JSON.parse(jsonString)[0];
			this.dataSource = categorias;
		})
	}

	DevolverCategoria(id: number) {
		this.cat.devolverCategoriaGet$Response({
			id: id
		}).subscribe((res) => {
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let categoria = JSON.parse(jsonString)[0][0];
			this.catServ.setCategoria(categoria);
		})
	}

	EditarCategoria(id: number) {
		this.DevolverCategoria(id);

		const dialogRef = this.dialog.open(EditarCategoriaComponent, {
			width: '800px',
		})
		dialogRef.componentInstance.statt.subscribe((res) => {
			if (res) {
				this.snackbar.open('Producto editado correctamente', 'Cerrar', {
					duration: 3000
				});
				this.ListarCategorias()
				dialogRef.close()
			} else {
				this.snackbar.open('Error al editar el producto', 'Cerrar', {
					duration: 3000
				});
			}
		})

	}

	AgregarCategoria() {
		const dialogRef = this.dialog.open(AgregarCategoriaComponent, {
			width: '800px',
		})
		dialogRef.componentInstance.statt.subscribe((res) => {
			if (res) {
				this.snackbar.open('Categoria agregada correctamente.', 'Cerrar', {
					duration: 3000
				});
				this.ListarCategorias()
				dialogRef.close()
			} else {
				this.snackbar.open('Error al agregar la cateogria.', 'Cerrar', {
					duration: 3000
				});
			}
		})
	}


	EliminarCategoria(id: number) {
		this.cat.eliminarCategoriaPost$Json$Response({
			id: id
		}).subscribe((res) => {
			this.snackbar.open('Categoria eliminada correctamente', 'Cerrar', {
				duration: 3000
			})
			this.ListarCategorias();
		})
	}



}

