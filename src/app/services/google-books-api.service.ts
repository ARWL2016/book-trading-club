import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/Book';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoogleBooksApiService {

  constructor(
    private http: Http
  ) { }

  searchBooks(title: string, author?: string): Promise<Book[] | undefined> {
    const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
    const encodedTitle = encodeURI(title);
    let url = `${baseUrl}${encodedTitle}`;

    if (author) {
      const encodedAuthor = encodeURI(author);
      url = url.concat(`+inauthor:${encodedAuthor}`);
    }
    console.log('search books service', url);

    return this.http.get(url)
      .map(res => res.json())
      .map(data => {
        if (!data.totalItems) {
          return undefined;
        }
        const filteredArray = [];
        data.items.forEach(item => {
          if (item.volumeInfo.language === 'en' && item.volumeInfo.title &&
            item.volumeInfo.authors && item.volumeInfo.imageLinks.smallThumbnail) {
            const { title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description } = item.volumeInfo;
            filteredArray.push({ title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description });
          }
        });
        if (filteredArray.length === 0) {
          return undefined;
        }
        return filteredArray;
      })
      .toPromise();
  }

}
