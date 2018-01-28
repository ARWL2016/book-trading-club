/**
 *  This component submits User credentials to the server. If login is successful, it navigates to Browse-Books.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from 'app/services/progress-bar.service';
import { User } from 'app/models/User';

@Component({
  selector: 'btc-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth-styles.scss', '../../styles/form-styles.scss']
})
export class LoginComponent {
  user: User = { username: '', password: '' };
  error: string;

  constructor(
    private auth: AuthService,
    private progressBarService: ProgressBarService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  public submitForm(): void {
    this.error = '';
    this.progressBarService.showProgressBar();
    this.auth.login(this.user)
      .then(() => {
        this.router.navigate(['/browse']);
        this.notify.success(this.user.username, 'You have been logged in');
        this.progressBarService.hideProgressBar();
      })
      .catch(() => {
        // TODO: handle 500 errors
        this.error = 'Your login details were incorrect.';
        this.progressBarService.hideProgressBar();
      });
  }
}
