/**
 *  @prop usernameChecked - true if username has been checked against database
 *  @prop usernameValid - true if username is not already on database
 *  @prop passwordMatch - true of password and confirmation fields match
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from 'app/services/progress-bar.service';
import { User } from 'app/models/user';

@Component({
  selector: 'btc-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/auth-styles.scss', '../../styles/form-styles.scss']
})
export class RegisterComponent {

  // form model
  user: User = { username: '', password: '' };
  confirmation: string;

  // validation properties
  usernameChecked = false;
  usernameValid = false;
  passwordMatch: boolean;
  error: string;

  constructor(
    private auth: AuthService,
    private progress: ProgressBarService,
    private notify: NotificationsService,
    private router: Router) { }

  // validate locally and then check database
  public checkUsername(): string | void {
    if (!this.user.username) {
      return this.error = 'enter a username';
    }
    if (this.user.username.length < 3) {
      return this.error = 'username must be minimum 3 characters';
    }
    this.auth.checkUsername(this.user.username)
      .subscribe(() => {
        this.usernameChecked = true;
        this.usernameValid = true;
      }, () => {
        this.error = 'username already exists';
        this.usernameChecked = true;
      });
  }

  public resetUsernameCheck(): void {
    this.error = '';
    this.usernameChecked = false;
    this.usernameValid = false;
  }

  public validatePassword(): boolean {
    if (this.user.password.length < 3) {
      this.error = 'Password should be at least 3 characters.';
      return false;
    }
    this.error = '';
    return true;
  }

  public checkMatch() {
    this.passwordMatch = false;
    if (this.validatePassword() && this.confirmation) {
      if (this.user.password === this.confirmation) {
        this.passwordMatch = true;
        this.error = '';
        } else {
        this.passwordMatch = false;
      }
    }
  }

  submitForm() {
    if (this.user.password !== this.confirmation) {
      this.error = 'passwords do not match.';
      return;
    }
    if (this.user.username && this.user.password) {
      this.error = '';
      this.progress.showProgressBar();
      // this.user = {
      //   username: this.user.username,
      //   password: this.user.password
      // };
      this.auth.register(this.user)
        .then(res => {
          this.router.navigate(['/browse']);
          this.notify.success(this.user.username, 'You have been registered and logged in');
          this.progress.hideProgressBar();
        })
        .catch(err => {
          if (err.status === 409) {
            this.error = 'Username not available.';
            this.progress.hideProgressBar();
          } else {
            this.error = 'Oops! Something went wrong...';
          }
        });
    }
  }

}
