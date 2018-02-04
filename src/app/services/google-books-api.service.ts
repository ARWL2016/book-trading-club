/**
 * Basic search: https://www.googleapis.com/books/v1/volumes?q=search+terms
 * https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey (containing 'keyes' in author field)
 * terms: inauthor: intitle: subject:
 * API Key not needed for basic search
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GoogleBooksApiService {

  constructor(private http: Http) { }

  public searchBooks({titleQuery, authorQuery}): Promise<any> {
    const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
    const encodedTitle = encodeURI(titleQuery);
    let url = `${baseUrl}${encodedTitle}`;

    if (authorQuery) {
      const encodedAuthor = encodeURI(authorQuery);
      url = url.concat(`+inauthor:${encodedAuthor}`);
    }

    return this.http.get(url)
      .map(res => res.json())
      .toPromise()
        .then(data => {
          if (!data.totalItems) {
            return Promise.reject('no data');
          }
          const filteredArray: Book[] = [];
          data.items.forEach(item => {
            if (item.volumeInfo.language === 'en' && item.volumeInfo.title && item.volumeInfo.authors
                && item.volumeInfo.imageLinks.smallThumbnail) {
                  const { title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description } = item.volumeInfo;
                  filteredArray.push({ title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description });
            }
          });
          if (filteredArray.length === 0) {
            return Promise.reject('no data');
          }
          return filteredArray;
        })
        .catch(e => {
          return Promise.reject(e);
        });

  }
}
