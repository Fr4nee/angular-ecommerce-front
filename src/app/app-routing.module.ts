import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './Vistas/categorias/categorias.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { LoginComponent } from './Vistas/login/login.component';
import { PaginaPrincipalComponent } from './Vistas/pagina-principal/pagina-principal.component';
import { PerfilComponent } from './Vistas/perfil/perfil.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { VenderComponent } from './Vistas/vender/vender.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'Ecommerce',
		component: InicioComponent,
		children: [
			{
				path: 'PaginaPrincipal',
				component: PaginaPrincipalComponent,
			},
			{
				path: 'Categorias',
				component: CategoriasComponent,
			},
			{
				path: 'Productos',
				component: ProductosComponent
			},
			{
				path: 'Vender',
				component: VenderComponent
			},
			{
				path: 'Perfil',
				component: PerfilComponent
			}
		],

	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
