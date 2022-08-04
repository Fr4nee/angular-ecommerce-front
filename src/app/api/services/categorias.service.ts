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
export class CategoriasService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listarCategoriasGet
   */
  static readonly ListarCategoriasGetPath = '/ListarCategorias';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarCategoriasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarCategoriasGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.ListarCategoriasGetPath, 'get');
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
   * To access the full response (for headers, for example), `listarCategoriasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarCategoriasGet(params?: {
  }): Observable<void> {

    return this.listarCategoriasGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation devolverCategoriaGet
   */
  static readonly DevolverCategoriaGetPath = '/DevolverCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devolverCategoriaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolverCategoriaGet$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.DevolverCategoriaGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `devolverCategoriaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolverCategoriaGet(params?: {
    id?: number;
  }): Observable<void> {

    return this.devolverCategoriaGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cargarCategoriaPost
   */
  static readonly CargarCategoriaPostPath = '/CargarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargarCategoriaPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Plain$Response(params?: {
    nombre?: string;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CargarCategoriaPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `cargarCategoriaPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Plain(params?: {
    nombre?: string;
    descripcion?: string;
  }): Observable<string> {

    return this.cargarCategoriaPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargarCategoriaPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Json$Response(params?: {
    nombre?: string;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CargarCategoriaPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `cargarCategoriaPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Json(params?: {
    nombre?: string;
    descripcion?: string;
  }): Observable<string> {

    return this.cargarCategoriaPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation editarCategoriaPost
   */
  static readonly EditarCategoriaPostPath = '/EditarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarCategoriaPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPost$Plain$Response(params?: {
    id?: number;
    nombre?: string;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EditarCategoriaPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `editarCategoriaPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPost$Plain(params?: {
    id?: number;
    nombre?: string;
    descripcion?: string;
  }): Observable<string> {

    return this.editarCategoriaPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarCategoriaPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPost$Json$Response(params?: {
    id?: number;
    nombre?: string;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EditarCategoriaPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `editarCategoriaPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPost$Json(params?: {
    id?: number;
    nombre?: string;
    descripcion?: string;
  }): Observable<string> {

    return this.editarCategoriaPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation eliminarCategoriaPost
   */
  static readonly EliminarCategoriaPostPath = '/EliminarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarCategoriaPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaPost$Plain$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EliminarCategoriaPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `eliminarCategoriaPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaPost$Plain(params?: {
    id?: number;
  }): Observable<string> {

    return this.eliminarCategoriaPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarCategoriaPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaPost$Json$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EliminarCategoriaPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `eliminarCategoriaPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaPost$Json(params?: {
    id?: number;
  }): Observable<string> {

    return this.eliminarCategoriaPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
