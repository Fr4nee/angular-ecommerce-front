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
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginValidoLoginGet
   */
  static readonly LoginValidoLoginGetPath = '/Login/ValidoLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginValidoLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginValidoLoginGet$Plain$Response(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.LoginValidoLoginGetPath, 'get');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('contraseña', params['contraseña'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginValidoLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginValidoLoginGet$Plain(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<boolean> {

    return this.loginValidoLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginValidoLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginValidoLoginGet$Json$Response(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.LoginValidoLoginGetPath, 'get');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('contraseña', params['contraseña'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginValidoLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginValidoLoginGet$Json(params?: {
    nombre?: string;
    'contraseña'?: string;
  }): Observable<boolean> {

    return this.loginValidoLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
