import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../models/user';
import { HelperService } from './helper.service';

@Injectable()

export class AuthService {
  public currentUser: User;

  constructor(private http: Http, private helper: HelperService) {}

  public checkUsername(username): Observable<Response> {
    const url = `/api/auth/check/${username}`;
    return this.http.get(url);
  }

  public register(user: User): Promise<any> {
    const url = `/api/auth/register`;
    return this.http.post(url, user)
      .do(response => {
        const token = this.helper.getAuthTokenFromHeader(response);
        window.localStorage.setItem('token', token);
      })
      .map(response => response.json())
      .do(json => this.updateCurrentUser(json))
      .toPromise();
  }

  public login(user: User): Promise<any> {
    const url = `/api/auth/login`;
    return this.http.post(url, user)
      .do(res => {
        const token = this.helper.getAuthTokenFromHeader(res);
        window.localStorage.setItem('token', token);
      })
      .map(res => res.json())
      .do(authorizedUser => this.updateCurrentUser(authorizedUser))
      .toPromise();
  }

  public logout(): Promise<any> {
    const options = this.helper.addAuthTokenToHeader();
    const url = `/api/auth/logout`;

    return this.http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('_id');
      })
      .catch(e => console.log(e));
  }

  private updateCurrentUser(user: User): void {
    const { username, _id } = user;
    this.currentUser = user;
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('_id', _id);
  }

  public isValidated(): string | null {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');
    const _id = window.localStorage.getItem('_id');

    if (token && username) {
      this.currentUser = {username, _id};
      return username;
    }
    return null;
  }

}
