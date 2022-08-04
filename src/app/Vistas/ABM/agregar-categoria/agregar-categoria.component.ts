import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/api/services';


@Component({
	selector: 'app-agregar-categoria',
	templateUrl: './agregar-categoria.component.html',
	styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

	@Output() statt = new EventEmitter<boolean>();
	add!: FormGroup;

	constructor(public cat: CategoriasService) { }

	ngOnInit(): void {
		this.add = new FormGroup({
			nombre: new FormControl('', Validators.required),
			descripcion: new FormControl('', Validators.required),
		});
	}

	AgregarCategoriaDialog() {
		this.cat.cargarCategoriaPost$Json$Response({
			nombre: this.add.get('nombre')!.value,
			descripcion: this.add.get('descripcion')!.value,
		}).subscribe((res) => {
			if (res.status === 200) {
				this.statt.emit(true);

			} else {
				this.statt.emit(false);
			}
		})
	}

}
