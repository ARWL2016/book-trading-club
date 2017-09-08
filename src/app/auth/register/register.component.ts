import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { AuthService } from "app/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'btc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  confirmation: string;
  error: string;
  user: User;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    console.log({'username': this.username, 'password': this.password});
    if (this.password.length < 3) {
      this.error = 'Password must be at least 3 characters.';
      return;
    }
    if (this.password !== this.confirmation) {
      this.error = 'Passwords do not match. Please try again.';
      return;
    }
    if (this.username) {
      this.user = {
        username: this.username,
        password: this.password
      };
      this.auth.register(this.user)
        .then((res) => {
          console.log('user created', res);

          this.router.navigate(['/browse']);
        })
        .catch(err => {
          console.log(err);
          this.error = 'UNDEFINED ERROR';
        });
    }
  }

}
