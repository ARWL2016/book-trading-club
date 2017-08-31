import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

// Example URL
// `https://www.googleapis.com/books/v1/volumes?q=${search}${author}${title}`;

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;

@Injectable()
export class AddBooksService {

  constructor(private http: Http) { }

  searchBooks(title, author) {
    let encodedTitle = encodeURI(title);
    let url = `${baseUrl}${encodedTitle}`;

    if (author) {
      let encodedAuthor = encodeURI(author);
      url = url.concat(`+inauthor:${encodedAuthor}`);
    }
    console.log('search books service', url);

    return this.http.get(url)
      .map(res => res.json())
      .map(data => {
        let filteredArray = [];
        data.items.forEach(item => {
          if (item.volumeInfo.language === 'en') {
            let { title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description } = item.volumeInfo;
            filteredArray.push({ title, subtitle, authors, publisher, publishedDate, pageCount, imageLinks, description });
          }
        });
        return filteredArray;
      })
      .toPromise();

  }

}
