import { EventEmitter, Injectable, Output } from '@angular/core';
import { Categoria } from '../api/models/categorias-models';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServicioService {
    @Output() categoriaEmitter = new EventEmitter<Categoria>();

    categoria: Categoria = {
      id: 0,
      nombre: '',
      descripcion: '',
    };

    constructor() { }

    setCategoria(nuevaCategoria: Categoria) {
      this.categoriaEmitter.emit(nuevaCategoria);
    }

}