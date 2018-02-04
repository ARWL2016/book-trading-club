import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Book } from 'app/models/book';

@Injectable()
export class HelperService {

  constructor() { }

   public getAuthTokenFromHeader(response: Response): string {
    const headers = response.headers.toJSON();
    if (headers['X-Auth']) {
      return headers['X-Auth'][0];
    }
    return headers['x-auth'][0];
  }

  public addAuthTokenToHeader(): RequestOptions {
    const token = window.localStorage.getItem('token');
    const headers = new Headers({ 'X-Auth': token, 'Content-Type': 'application/json', });
    const options = new RequestOptions({ headers });
    return options;
  }

  public convertToHttps(books: Book[]): Book[] {
    const result = books.map(book => {
      const thumbnail =  book.imageLinks.thumbnail.replace('http:', 'https:');
      book.imageLinks.thumbnail = thumbnail;
      return book;
    });
    return result;
  }

}
