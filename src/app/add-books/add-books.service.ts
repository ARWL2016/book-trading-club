import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Book } from '../models/Book';
import { User } from "app/models/User";
import { HelperService } from "app/services/helper.service";

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;

@Injectable()
export class AddBooksService {

  constructor(
    private http: Http,
    private helper: HelperService ) { }

  searchBooks(title: string, author?: string): Promise<Book[] | {error: string}> {
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
          return { error: 'the search returned no items' };
        }
        let filteredArray = [];
        data.items.forEach(item => {
          if (item.volumeInfo.language === 'en' && item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.imageLinks.smallThumbnail) {
            let { title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description } = item.volumeInfo;
            filteredArray.push({ title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description });
          }
        });
        if (filteredArray.length === 0) {
          return { error: 'the search returned no items' };
        }
        return filteredArray;
      })
      .toPromise();
  }

  addBookToCollection(user: User, book: Book){
    console.log(`Adding ${book.title} to the collection of ${user.username}`);
    // post data to API - error checking
    const url = 'app/book/addBook';
    const body = {user, book};
    const options = this.helper.addAuthTokenToHeader();
    return this.http.post(url, body, options)
      .subscribe();

  }

}
