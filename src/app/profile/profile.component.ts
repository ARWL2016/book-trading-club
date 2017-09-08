import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { User } from "app/models/User";
import { ProfileService } from "app/profile/profile.service";
import { Book } from "app/models/Book";
import { MaterializeAction } from 'angular2-materialize';
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'btc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  myBooks: Book[];
  selectedBook: Book;
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private auth: AuthService,
    private profile: ProfileService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    console.log(this.currentUser);
    this.profile.getCurrentUsersBooks(this.currentUser._id)
      .subscribe(data => {
        this.myBooks = data;
        console.log(this.myBooks);
      });
  }

  deleteBook(book) {
    this.selectedBook = book;
    console.log(book);
    this.openModal();
  }

  confirmDelete(book) {
    this.profile.deleteBookById(book._id).subscribe(res => {
      console.log(res);
      this.closeModal();
      this.ngOnInit();
      this.notify.success(book.title, 'This book was removed from your collection');
      this.selectedBook = null;
    });

  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

}
