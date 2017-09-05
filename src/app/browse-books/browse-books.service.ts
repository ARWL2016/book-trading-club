import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Book } from '../models/Book';
import { User } from 'app/models/User';
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

}
