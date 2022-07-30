import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/api/services';
import { Producto } from 'src/app/api/models/productos-model';
import { ProductosServicioService } from 'src/app/Servicios/productos-servicio.service';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-editar-producto',
	templateUrl: './editar-producto.component.html',
	styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {

	@Output() stat = new EventEmitter<boolean>();
	Producto: Producto = {
		id: 0,
		nombre: '',
		descripcion: '',
		precio: 0,
		stock: 0,
		categoria: '',
		imagen: '',
	}
	edit!: FormGroup;

	ngOnInit() {
		console.log(this.edit.value)
	}

	constructor(
		public prod: ProductosService,
		public prodServ: ProductosServicioService,
		public builder: FormBuilder,
	) {
		this.prodServ.productoEmitter.subscribe((producto) => {
			this.edit = this.builder.group({
				id: new FormControl(producto.id, Validators.required),
				nombre: new FormControl(producto.nombre, Validators.required),
				descripcion: new FormControl(producto.descripcion, Validators.required),
				precio: new FormControl(producto.precio, Validators.required),
				stock: new FormControl(producto.stock, Validators.required),
				categoria: new FormControl(producto.categoria, Validators.required),
				imagen: new FormControl(producto.imagen, Validators.required),
			})
		})
	}

	EditarProducto() {
		const nombre = this.edit.get('nombre')!.value;
		const descripcion = this.edit.get('descripcion')!.value;
		const precio = this.edit.get('precio')!.value;
		const stock = this.edit.get('stock')!.value;
		const categoria = this.edit.get('categoria')!.value;
		const imagen = this.edit.get('imagen')!.value;
		const id = this.edit.get('id')!.value;

		this.prod.productosEditarProductoPost$Json$Response({
			nombre: nombre || undefined, 
			descripcion: descripcion || undefined,
			precio: precio || 0,
			stock: stock || 0,
			categoria: categoria || undefined,
			imagen: imagen || undefined,
			id: id || 0, 
		}).subscribe((res) => {
			if (res.status === 200) {
				this.stat.emit(true);
			} else {
				this.stat.emit(false);
			}
		})
	}




}
