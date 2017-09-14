import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from '../models/User';
import { HelperService } from './helper.service';

@Injectable()

export class AuthService {
  currentUser: User;

  constructor(
    private _http: Http,
    private _helper: HelperService
    ) {}

  register(user: User): Promise<void> {
    const url = `/api/auth/register`;
    return this._http.post(url, user)
      .do (response => {
        const token = this._helper.getAuthTokenFromHeader(response);
        window.localStorage.setItem('token', token);
      })
      .map(response => response.json())
      .do((json) => this.updateCurrentUser(json))
      .toPromise();
  }

  checkUsername(username) {
    const url = `/api/auth/check/${username}`;
    return this._http.get(url);
  }

  login(user: User): Promise<boolean> {
    const url = `/api/auth/login`;
    return this._http.post(url, user)
      .do(response => {
        const token = this._helper.getAuthTokenFromHeader(response);
        window.localStorage.setItem('token', token);
        console.log('User submitted: ', user);
      })
      .map(response => response.json())
      .do(authorizedUser => this.updateCurrentUser(authorizedUser))
      .toPromise();
  }

  logout(): Promise<void> {
    const options = this._helper.addAuthTokenToHeader();
    const url = `/api/auth/logout`;

    return this._http.delete(url, options)
      .toPromise()
      .then(() => {
        this.currentUser = undefined;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('_id');
        console.log('User has been logged out');
      })
      .catch(e => console.log(e));
  }

  updateCurrentUser(user: User) {
    const { username, _id } = user;
    this.currentUser = user;
    console.log('USER', this.currentUser);
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('_id', _id);
  }

  isValidated(): string {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');
    const _id = window.localStorage.getItem('_id');

    if (token && username) {
      this.currentUser = {username, _id};
      return username;
    }
    return null;
  }

  getCurrentUserId() {
    if (this.currentUser) {
      console.log('get ID', this.currentUser._id);
      return this.currentUser._id;
    }
    return null;

  }

  getCurrentUser() {
    return this.currentUser;
  }




}
