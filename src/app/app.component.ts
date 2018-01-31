import { Component, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from 'app/services/auth.service';
import { ProgressBarService } from 'app/services/progress-bar.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(click)': 'removeDropdown($event)'
  }
})
export class AppComponent implements DoCheck {
  get username () {
    return this.auth.isValidated();
  }

  // UI properties
  activeLink = '';
  dropdownVisible = false;
  progressBar = true;

  // angular notifications config
  public options = {
    timeOut: 3500,
    lastOnBottom: true,
    showProgressBar: true,
    pauseOnHover: true
  };

  ngDoCheck(): void {
    this.progressBar = this.progressBarService.status;
    this.activeLink = this.router.url;
  }

  constructor(
    private auth: AuthService,
    private progressBarService: ProgressBarService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  public routerLink(link): void {
    this.router.navigate([link]);
    this.activeLink = link;
  }

  public toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  public removeDropdown(e): void {
    if (e.target.id !== 'dropdownIcon') {
      this.dropdownVisible = false;
    }
  }

  public signOut(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
    this.notify.info(this.username, 'You have been logged out');
  }
}
