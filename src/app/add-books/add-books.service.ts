import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()

export class AddBooksService {

  constructor() { }

  searchBooks() {
    console.log('search books service');
  }

}
