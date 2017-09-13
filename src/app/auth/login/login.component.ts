import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import {NotificationsService} from 'angular2-notifications';
import {ProgressBarService} from "app/services/progress-bar.service";

@Component({
  selector: 'btc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;
  user: User;

  constructor(
    private auth: AuthService,
    private progressBarService: ProgressBarService,
    private router: Router,
    private notify: NotificationsService) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.username && this.password) {
      this.error ='';
      this.progressBarService.showProgressBar();
      this.user = { username: this.username, password: this.password };
      this.auth.login(this.user)
        .then((res) => {
          console.log(res);
            this.router.navigate(['/browse']);
            this.notify.success(this.user.username, 'You have been logged in');
            this.progressBarService.hideProgressBar();
        })
        .catch(e => {
          console.log(e);
          this.error = 'Your login details were incorrect.';
          this.progressBarService.hideProgressBar();
        });
    }
  }

}
