import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// Example URL
// `https://www.googleapis.com/books/v1/volumes?q=${search}${author}${title}`;

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;

@Injectable()
export class AddBooksService {

  constructor() { }

  searchBooks(title, author) {
    let encodedTitle = encodeURI(title);
    let url = `${baseUrl}${encodedTitle}`;

    if (author) {
      let encodedAuthor = encodeURI(author);
      url = url.concat(`+inauthor:${encodedAuthor}`);
    }
    console.log('search books service', url);
  }

}
