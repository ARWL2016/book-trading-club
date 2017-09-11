import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Book } from '../models/Book';
import { User } from 'app/models/User';
import { BorrowRequest } from 'app/models/Borrow-Request';
import { HelperService } from 'app/services/helper.service';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class BrowseBooksService {

  constructor(
    private http: Http,
    private helper: HelperService,
    private auth: AuthService ) { }

    getAllBooks(): Observable<Book[]> {
      const url = '/api/book/getBooks';

      return this.http.get(url)
        .map(res => res.json());
    }

    searchBooks(title: string, author?: string) {
      const url = `/api/book/searchBooks/${title}`;
      console.log('search books', title);
      return this.http.get(url)
        .map(res => res.json());
    }

    requestBook(user: User, book: Book) {
      const requesterId = this.auth.getCurrentUserId();
      console.log(book);
      const timestamp = new Date().toString();
      const request: BorrowRequest = {
        requesterId: requesterId,
        requesterName: user.username,
        ownerId: book.userId,
        ownerName: book.username,
        bookId: book._id,
        dateRequested: timestamp,
        status: 'new'
      };
      console.log(request);

      const url = '/api/request/createRequest';
      const body = {request};
      const options = this.helper.addAuthTokenToHeader();
      return this.http.post(url, body, options);

    }

}
