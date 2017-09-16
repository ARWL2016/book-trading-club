import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from 'app/services/progress-bar.service';
// import { pageTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(click)': 'removeDropdown($event)'
 }

})
export class AppComponent implements OnInit, DoCheck {
  username: string;

  linkClassBrowse: string;
  linkClassAdd: string;
  linkClassRegister: string;
  linkClassLogin: String;

  dropdownVisible = false;
  progressBar = true;

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
    this.progressBar = this.progressBarService.status;

    this.linkClassBrowse = this.router.url === '/browse' ? 'active' : '';
    this.linkClassAdd = this.router.url === '/add' ? 'active' : '';
    this.linkClassLogin = this.router.url === '/login' ? 'active' : '';
    this.linkClassRegister = this.router.url === '/register' ? 'active' : '';
  }

  constructor(
    private auth: AuthService,
    private progressBarService: ProgressBarService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  toggleDropdown() {
    console.log('show DD');
    this.dropdownVisible = this.dropdownVisible === false ? true : false;
    console.log(this.dropdownVisible);
  }

  removeDropdown(e) {
    if (e.target.id !== 'dropdownIcon') {
      this.dropdownVisible = false;
    }
  }

  signOut() {
    console.log('Signing out ', this.username);
    this.auth.logout();
    this.router.navigate(['/login']);
    this.notify.info(this.username, 'You have been logged out');
    this.username = null;
  }

}
