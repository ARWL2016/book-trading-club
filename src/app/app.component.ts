import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, DoCheck {
  username: string;
  public options = {
    timeOut: 3000,
    lastOnBottom: true,
    showProgressBar: true,
    pauseOnHover: true
  };

  ngOnInit(): void {
    this.username = this.auth.isValidated();
  }

  ngDoCheck() {
    this.username = this.auth.isValidated();
  }

  constructor(
    private auth: AuthService,
    private router: Router,

  ) { }

  signOut() {
    console.log('Signing out ', this.username);
    this.auth.logout();
    this.username = null;
    this.router.navigate(['/login']);
  }

}
