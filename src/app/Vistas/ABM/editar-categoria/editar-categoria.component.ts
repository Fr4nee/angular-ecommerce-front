import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/api/models/categorias-models';
import { CategoriasService } from 'src/app/api/services';
import { FormBuilder } from '@angular/forms';
import { CategoriasServicioService } from 'src/app/Servicios/categoria-servicio.service';

@Component({
	selector: 'app-editar-categoria',
	templateUrl: './editar-categoria.component.html',
	styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

	@Output() statt = new EventEmitter<boolean>();
	edit!: FormGroup;

	categoria: Categoria = {
		id: 0,
		nombre: '',
		descripcion: '',
	}

	ngOnInit() {
		console.log(this.edit.value)
	}

	constructor(
		public cat: CategoriasService,
		public catServ: CategoriasServicioService,
		public builder: FormBuilder,
	) {
		this.catServ.categoriaEmitter.subscribe((categoria) => {
			this.edit = this.builder.group({
				id: new FormControl(categoria.id, Validators.required),
				nombre: new FormControl(categoria.nombre, Validators.required),
				descripcion: new FormControl(categoria.descripcion, Validators.required),
			})
		})
	}

	EditarCategoria() {
		const nombre = this.edit.get('nombre')!.value;
		const descripcion = this.edit.get('descripcion')!.value;
		const id = this.edit.get('id')!.value;

		this.cat.editarCategoriaPost$Json$Response({
			nombre: nombre || undefined,
			descripcion: descripcion || undefined,
			id: id || 0,
		}).subscribe((res) => {
			if (res.status === 200) {
				this.statt.emit(true);
			} else {
				this.statt.emit(false);
			}
		})
	}



}
