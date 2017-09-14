import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { AuthService } from 'app/services/auth.service';
import {Router} from '@angular/router';
import {ProgressBarService} from 'app/services/progress-bar.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'btc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  username: string;
  password: string;
  confirmation: string;
  usernameChecked = false;
  usernameValid = false;
  passwordMatch: boolean;
  error: string;

  constructor(
    private auth: AuthService,
    private progress: ProgressBarService,
    private notify: NotificationsService,
    private router: Router) { }

  ngOnInit() {
  }

  checkUsername() {
    if (!this.username) {
      return this.error = 'enter a username';
    }
    if (this.username.length < 3) {
      return this.error = 'username must be minimum 3 characters';
    }
    this.auth.checkUsername(this.username)
      .subscribe(res => {
        this.usernameChecked = true;
        this.usernameValid = true;
      }, err => {
        this.error = 'username already exists';
        this.usernameChecked = true;
        this.usernameValid = false;
      });
  }

  clearUsernameCheck() {
    this.error = '';
    this.usernameChecked = false;
    this.usernameValid = false;
  }

  checkMatch() {
    if (this.password && this.confirmation) {
      if (this.password.length > 2 && this.confirmation.length > 0 && this.password === this.confirmation) {
        this.passwordMatch = true;
        this.error = '';
        } else {
        this.passwordMatch = false;
      }
    }
  }

  submitForm() {
    if (this.password !== this.confirmation) {
      this.error = 'passwords do not match.';
      return;
    }
    if (this.username && this.password) {
      this.error = '';
      this.progress.showProgressBar();
      this.user = {
        username: this.username,
        password: this.password
      };
      this.auth.register(this.user)
        .then(res => {
          console.log('user created', res);
          this.router.navigate(['/browse']);
          this.notify.success(this.username, 'You have been registered and logged in');
          this.progress.hideProgressBar();
        })
        .catch(err => {
          console.log(err);
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
