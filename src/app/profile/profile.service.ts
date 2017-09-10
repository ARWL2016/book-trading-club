import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProfileService {

  constructor(
    private http: Http) { }

  // methods
  // get my books
  getMyBooks(id) {
    console.log('service', id);
    const url = `/api/book/getCurrentUsersBooks?id=${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getMyRequests(id) {
    console.log('get requests', id);
    const url = `/api/book/getCurrentUsersRequests?id=${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  deleteBookById(id) {
    const url = `/api/book/delete/${id}`;
    return this.http.delete(url);
      // .map(res => res.json());
  }


  // get my requests
  // get my user profile data - location, interests, name, number of books
}
