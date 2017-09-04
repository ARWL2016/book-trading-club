import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { User } from "app/models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  username: string;

  ngOnInit(): void {
    console.log('App Component Initialized');
    this.username = this.auth.isValidated();
    console.log('Username: ', this.username);
  }

  ngDoCheck() {
    console.log('do check');
    this.username = this.auth.isValidated();
  }

  constructor(
    private auth: AuthService
  ) { }

  signOut() {
    console.log('Signing out ', this.username);
    this.auth.logout();
    this.username = null;
  }

}
