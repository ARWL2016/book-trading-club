import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HelperService {

  constructor() { }

   getAuthTokenFromHeader(response: Response): string {
    const headers = response.headers.toJSON();
    if (headers['X-Auth']) {
      return headers['X-Auth'][0];
    } else {
      return headers['x-auth'][0];
    }
  }

  addAuthTokenToHeader(): RequestOptions {
    const token = window.localStorage.getItem('token');
    const headers = new Headers({ 'X-Auth': token, 'Content-Type': 'application/json', });
    const options = new RequestOptions({ headers });
    return options;
  }

}
