import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../api/models/productos-model';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicioService {
    @Output() productoEmitter = new EventEmitter<Producto>();

    producto: Producto = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
      categoria: '',
      imagen: '',
    };

    constructor() { }

    setProducto(nuevoProducto: Producto) {
      this.productoEmitter.emit(nuevoProducto);
    }

}

