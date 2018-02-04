import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HelperService } from 'app/services/helper.service';
import { AuthService } from 'app/services/auth.service';

import { Book } from 'app/models/book';
import { User } from 'app/models/user';
import { BorrowRequest } from 'app/models/borrow-request';


@Injectable()
export class RequestService {

  constructor(
    private helper: HelperService,
    private auth: AuthService,
    private http: Http) { }

  private options = this.helper.addAuthTokenToHeader();

  public requestBook(user: User, book: Book): Observable<Response> {
    const requesterId: string = this.auth.currentUser._id;
    const timestamp = new Date().toString();
    const request: BorrowRequest = {
      requesterId: requesterId,
      requesterName: user.username,
      ownerId: book.userId,
      ownerName: book.username,
      bookId: book._id,
      bookTitle: book.title,
      dateRequested: timestamp,
      status: 'new'
    };

    const url = '/api/request/createRequest';
    const body = { request };

    const options = this.helper.addAuthTokenToHeader();
    return this.http.post(url, body, options);
  }

  public getMyRequests(id: string): Observable<[{ Request }]> {
    const url = `/api/request/getCurrentUsersRequests?id=${id}`;
    const options = this.helper.addAuthTokenToHeader();
    return this.http.get(url, options)
      .map((res: Response) => res.json());
  }

  public deleteRequestById(id): Observable<Response> {
    const options = this.helper.addAuthTokenToHeader();
    const url = `api/request/delete/${id}`;
    return this.http.delete(url, options);
  }

}
