import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BorrowRequest } from 'app/models/Borrow-Request';
import { HelperService } from 'app/services/helper.service';
import { AuthService } from 'app/services/auth.service';

import { Book } from '../models/Book';
import { User } from 'app/models/User';


@Injectable()
export class RequestService {

  constructor(
    private helper: HelperService,
    private auth: AuthService,
    private http: Http) { }

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

  getMyRequests(id) {
    const url = `/api/request/getCurrentUsersRequests?id=${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  deleteRequestById(id) {
    const url = `api/request/delete/${id}`;
    return this.http.delete(url);
  }

}
