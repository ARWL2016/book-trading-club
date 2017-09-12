import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from '../models/Book';
import { AuthService } from 'app/services/auth.service';
import { HelperService } from 'app/services/helper.service';

@Injectable()
export class BookService {

  constructor(
    private http: Http,
    private authService: AuthService,
    private helperService: HelperService) { }

  getAllBooks(): Observable<Book[]> {
    const url = '/api/book/getBooks';

    return this.http.get(url)
      .map(res => res.json());
  }

  getMyBooks(id) {
    // console.log('service', id);
    const url = `/api/book/getCurrentUsersBooks?id=${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  searchBooks(title: string, author?: string) {
    const url = `/api/book/searchBooks/${title}`;
    console.log('search books', title);
    return this.http.get(url)
      .map(res => res.json());
  }

  addBookToCollection(bookToAdd: Book){
    const user = this.authService.getCurrentUser();
    console.log(`Adding ${bookToAdd.title} to the collection of ${user.username} with id of ${user._id}`);
    const url = '/api/book/addBook';
    const body = {user, bookToAdd};
    const options = this.helperService.addAuthTokenToHeader();
    return this.http.post(url, body, options)
      .subscribe(res => console.log(res));
  }

  deleteBookById(id) {
    const url = `/api/book/delete/${id}`;
    return this.http.delete(url);
      // .map(res => res.json());
  }

}
