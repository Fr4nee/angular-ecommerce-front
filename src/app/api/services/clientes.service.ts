/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ClientesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation clientesListarClientesGet
   */
  static readonly ClientesListarClientesGetPath = '/Clientes/ListarClientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesListarClientesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesListarClientesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesListarClientesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesListarClientesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesListarClientesGet(params?: {
  }): Observable<void> {

    return this.clientesListarClientesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation clientesDevolverClienteGet
   */
  static readonly ClientesDevolverClienteGetPath = '/Clientes/DevolverCliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesDevolverClienteGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesDevolverClienteGet$Response(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesDevolverClienteGetPath, 'get');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('contraseña', params['contraseña'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesDevolverClienteGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesDevolverClienteGet(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<void> {

    return this.clientesDevolverClienteGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation clientesRegistrarClientePost
   */
  static readonly ClientesRegistrarClientePostPath = '/Clientes/RegistrarCliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesRegistrarClientePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Plain$Response(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesRegistrarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesRegistrarClientePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Plain(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
  }): Observable<string> {

    return this.clientesRegistrarClientePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesRegistrarClientePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Json$Response(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesRegistrarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesRegistrarClientePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Json(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
  }): Observable<string> {

    return this.clientesRegistrarClientePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation clientesEditarClientePost
   */
  static readonly ClientesEditarClientePostPath = '/Clientes/EditarCliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesEditarClientePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePost$Plain$Response(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesEditarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesEditarClientePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePost$Plain(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
    id?: number;
  }): Observable<string> {

    return this.clientesEditarClientePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesEditarClientePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePost$Json$Response(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesEditarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clientesEditarClientePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePost$Json(params?: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    'contraseña'?: string;
    id?: number;
  }): Observable<string> {

    return this.clientesEditarClientePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
