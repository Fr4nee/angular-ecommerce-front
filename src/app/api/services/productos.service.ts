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
export class ProductosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productosListarProductosGet
   */
  static readonly ProductosListarProductosGetPath = '/Productos/ListarProductos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosListarProductosGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosListarProductosGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosListarProductosGetPath, 'get');
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
   * To access the full response (for headers, for example), `productosListarProductosGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosListarProductosGet(params?: {
  }): Observable<void> {

    return this.productosListarProductosGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation productosCargarProductoPost
   */
  static readonly ProductosCargarProductoPostPath = '/Productos/CargarProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosCargarProductoPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Plain$Response(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosCargarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
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
   * To access the full response (for headers, for example), `productosCargarProductoPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Plain(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
  }): Observable<string> {

    return this.productosCargarProductoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosCargarProductoPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Json$Response(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosCargarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
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
   * To access the full response (for headers, for example), `productosCargarProductoPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Json(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
  }): Observable<string> {

    return this.productosCargarProductoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation productosEditarProductoPost
   */
  static readonly ProductosEditarProductoPostPath = '/Productos/EditarProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosEditarProductoPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPost$Plain$Response(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosEditarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `productosEditarProductoPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPost$Plain(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
    id?: number;
  }): Observable<string> {

    return this.productosEditarProductoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosEditarProductoPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPost$Json$Response(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosEditarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `productosEditarProductoPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPost$Json(params?: {
    nombre?: string;
    precio?: number;
    imagen?: string;
    categoria?: string;
    stock?: number;
    descripcion?: string;
    id?: number;
  }): Observable<string> {

    return this.productosEditarProductoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation productosDeleteProductoPost
   */
  static readonly ProductosDeleteProductoPostPath = '/Productos/DeleteProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDeleteProductoPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoPost$Plain$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDeleteProductoPostPath, 'post');
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
   * To access the full response (for headers, for example), `productosDeleteProductoPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoPost$Plain(params?: {
    id?: number;
  }): Observable<string> {

    return this.productosDeleteProductoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDeleteProductoPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoPost$Json$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDeleteProductoPostPath, 'post');
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
   * To access the full response (for headers, for example), `productosDeleteProductoPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoPost$Json(params?: {
    id?: number;
  }): Observable<string> {

    return this.productosDeleteProductoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation productosDevolverProductoGet
   */
  static readonly ProductosDevolverProductoGetPath = '/Productos/DevolverProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDevolverProductoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDevolverProductoGet$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDevolverProductoGetPath, 'get');
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
   * To access the full response (for headers, for example), `productosDevolverProductoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDevolverProductoGet(params?: {
    id?: number;
  }): Observable<void> {

    return this.productosDevolverProductoGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
