import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, DoCheck {
  username: string;

  linkClassBrowse: string;
  linkClassAdd: string;
  linkClassRegister: string;
  linkClassLogin: String;

  public options = {
    timeOut: 3000,
    lastOnBottom: true,
    showProgressBar: false,
    pauseOnHover: true
  };

  ngOnInit(): void {
    this.username = this.auth.isValidated();
  }

  ngDoCheck() {
    this.username = this.auth.isValidated();

    this.linkClassBrowse = this.router.url === '/browse' ? 'active' : '';
    this.linkClassAdd = this.router.url === '/add' ? 'active' : '';
    this.linkClassLogin = this.router.url === '/login' ? 'active' : '';
    this.linkClassRegister = this.router.url === '/register' ? 'active' : '';
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  signOut() {
    console.log('Signing out ', this.username);
    this.auth.logout();

    this.router.navigate(['/login']);
    this.notify.info(this.username, 'You have been logged out');
    this.username = null;
  }

}
