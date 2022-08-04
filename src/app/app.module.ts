import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Vistas/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ApiModule } from './api/api.module';
import { SidenavComponent } from './Componentes/sidenav/sidenav.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { PerfilComponent } from './Vistas/perfil/perfil.component';
import { PaginaPrincipalComponent } from './Vistas/pagina-principal/pagina-principal.component';
import { ProductosComponent } from './Vistas/productos/productos.component';
import { VenderComponent } from './Vistas/vender/vender.component';
import { CategoriasComponent } from './Vistas/categorias/categorias.component';
import { EditarClienteComponent } from './Vistas/ABM/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from './Vistas/ABM/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './Vistas/ABM/agregar-producto/agregar-producto.component';
import { AgregarCategoriaComponent } from './Vistas/ABM/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './Vistas/ABM/editar-categoria/editar-categoria.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    InicioComponent,
    PerfilComponent,
    PaginaPrincipalComponent,
    ProductosComponent,
    VenderComponent,
    CategoriasComponent,
    EditarClienteComponent,
    EditarProductoComponent,
    AgregarProductoComponent,
    AgregarCategoriaComponent,
    EditarCategoriaComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ApiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
