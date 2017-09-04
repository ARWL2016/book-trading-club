import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { AuthService } from "app/services/auth.service";
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.username && this.password) {
      this.user = { username: this.username, password: this.password };
      this.auth.login(this.user)
        .then((res) => {
          console.log(res);

            this.router.navigate(['/add']);
        })
        .catch(e => {
          console.log(e);
          this.error = 'Your login details were incorrect. Please try again.';
        });
    }
  }

}
