import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/api/services';
import { ProductosServicioService } from 'src/app/Servicios/productos-servicio.service';


@Component({
	selector: 'app-agregar-producto',
	templateUrl: './agregar-producto.component.html',
	styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

	@Output() stat = new EventEmitter<boolean>();

	add!: FormGroup;

	constructor(
		public prod: ProductosService,
		public prodServ: ProductosServicioService,
	) {}

	ngOnInit() {
		this.add = new FormGroup({
			nombre: new FormControl('', Validators.required),
			descripcion: new FormControl('', Validators.required),
			precio: new FormControl('', Validators.required),
			stock: new FormControl('', Validators.required),
			categoria: new FormControl('', Validators.required),
			imagen: new FormControl('', Validators.required),
		});
	}

	AgregarProducto() {
		this.prod.productosCargarProductoPost$Json$Response({
			nombre: this.add.get('nombre')!.value,
			descripcion: this.add.get('descripcion')!.value,
			precio: this.add.get('precio')!.value,
			stock: this.add.get('stock')!.value,
			categoria: this.add.get('categoria')!.value,
			imagen: this.add.get('imagen')!.value,

		}).subscribe((res) => {
			if (res.status === 200) {
				this.stat.emit(true);
			} else {
				this.stat.emit(false);
			}
		})
	}

}
