import { Component, EventEmitter, Output} from '@angular/core';
import { ProductosService } from 'src/app/api/services';
import { Producto } from 'src/app/api/models/productos-model';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from '../ABM/editar-producto/editar-producto.component'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ProductosServicioService } from 'src/app/Servicios/productos-servicio.service'; 
import { AgregarProductoComponent } from '../ABM/agregar-producto/agregar-producto.component';
@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css'],
})

export class ProductosComponent {
	dataSource: Producto[] = [];
	listaProducto: any[] = []
	displayedColumns: string[] = ['id', 'nombre', 'precio', 'imagen', 'categoria', 'stock', 'descripcion', 'botones'];
	producto: Producto = {
		id: 0,
		nombre: '',
		descripcion: '',
		precio: 0,
		stock: 0,
		categoria: '',
		imagen: '',
	}

	constructor(
		public prod: ProductosService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		public prodServ: ProductosServicioService
	) { 
		this.ListarProductos();
	}

	ListarProductos() {
		this.prod.productosListarProductosGet$Response()
		.subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let productos = JSON.parse(jsonString)[0];
			this.dataSource = productos;
			console.log(this.dataSource)
		})
	}

	DevolverProducto(id: number) {
		this.prod.productosDevolverProductoGet$Response({
			id: id 
		}).subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let producto = JSON.parse(jsonString)[0][0];
			console.log(producto) 
			this.prodServ.setProducto(producto);
		})
	}

	EditarProducto(element: number) {
		this.DevolverProducto(element)

		const dialogRef = this.dialog.open(EditarProductoComponent, {
			width: '800px',
		})
		dialogRef.componentInstance.stat.subscribe((res) => {
			if (res) {
				this.snackBar.open('Producto editado correctamente', 'Cerrar', {
					duration: 3000
				});
				this.ListarProductos()
				dialogRef.close()
			} else {
				this.snackBar.open('Error al editar el producto', 'Cerrar', {
					duration: 3000
				});
			}
		})
	}

	AgregarProducto() {
		const dialogRef = this.dialog.open(AgregarProductoComponent, {
			width: '800px',
		})
		dialogRef.componentInstance.stat.subscribe((res) => {
			if (res) {
				this.snackBar.open('Producto agregado correctamente', 'Cerrar', {
					duration: 3000
				});
				this.ListarProductos()
				dialogRef.close()
			} else {
				this.snackBar.open('Error al agregar el producto', 'Cerrar', {
					duration: 3000
				});
			}
		})
	}

	EliminarProducto(element: number) {
		this.prod.productosDeleteProductoPost$Json$Response({
			id: element
		}).subscribe((res) => {
			this.snackBar.open('Producto eliminado correctamente', 'Cerrar', {
				duration: 3000
			})
			this.ListarProductos()
		})
	}







}
