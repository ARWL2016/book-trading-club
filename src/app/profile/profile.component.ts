import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { User } from "app/models/User";
import { ProfileService } from "app/profile/profile.service";
import { Book } from "app/models/Book";

@Component({
  selector: 'btc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  myBooks: Book[];
  constructor(
    private auth: AuthService,
    private profile: ProfileService
  ) { }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    console.log(this.currentUser);
    this.profile.getCurrentUsersBooks(this.currentUser._id)
      .subscribe(data => {
        this.myBooks = data;
      });


  }

}
