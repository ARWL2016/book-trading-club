import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/User';
import { ProfileService } from 'app/profile/profile.service';
import { Book } from "app/models/Book";
import { MaterializeAction } from 'angular2-materialize';
import { NotificationsService } from 'angular2-notifications';
import { BorrowRequest } from 'app/models/Borrow-Request';
import { RequestView } from "app/models/request-view";

@Component({
  selector: 'btc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  myBooks: Book[];
  selectedBook: Book;
  myRequests: [{Book, Request}];
  modalActions = new EventEmitter<string|MaterializeAction>();
  activeTab = 'Collection';
  linkClassCollection = 'active';
  linkClassRequests: String;

  constructor(
    private auth: AuthService,
    private profile: ProfileService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    this.profile.getMyBooks(this.currentUser._id)
      .subscribe(data => {
        this.myBooks = data;
        console.log(data);
      });
    this.profile.getMyRequests(this.currentUser._id)
      .subscribe(data => {
        this.myRequests = data;

      });
  }

  showContent(e) {
    if (e.target.innerHTML === 'Collection') {
      this.activeTab = 'Collection';
      this.linkClassCollection = 'active';
      this.linkClassRequests = '';
    } else if (e.target.innerHTML === 'Requests') {
      this.activeTab = 'Requests';
      this.linkClassCollection = '';
      this.linkClassRequests = 'active';
    }
  }

  deleteBook(book) {
    this.profile.deleteBookById(book._id).subscribe(res => {
      console.log(res);
      if (res.status === 200) {
        this.ngOnInit();
        this.notify.success(book.title, 'This book was removed from your collection');
      }
    });
  }

  cancelRequest(request) {

  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

}
