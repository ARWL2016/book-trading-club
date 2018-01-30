import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from '../models/book';
import { AuthService } from 'app/services/auth.service';
import { HelperService } from 'app/services/helper.service';

@Injectable()
export class BookService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private helperService: HelperService) { }

  public getAllBooks(): Observable<Book[]> {
    const url = '/api/book/getBooks';

    return this.http.get(url)
      .map(res => res.json());
  }

  public getMyBooks(id): Observable<Book[]> {
    const url = `/api/book/getCurrentUsersBooks?id=${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  public searchBooks(title: string, author?: string): Observable<Book[]> {
    const url = `/api/book/searchBooks/${title}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  public addBookToCollection(bookToAdd: Book): Observable<Response> {
    const user = this.authService.currentUser;
    const url = '/api/book/addBook';
    const body = {user, bookToAdd};
    const options = this.helperService.addAuthTokenToHeader();
    return this.http.post(url, body, options);
  }

  public deleteBookById(id: string): Observable<Response> {
    const url = `/api/book/delete/${id}`;
    return this.http.delete(url);
  }

}
