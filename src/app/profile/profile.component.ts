import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from 'app/services/auth.service';
import { BookService } from 'app/services/book.service';
import { RequestService } from 'app/services/request.service';
import { ProgressBarService } from 'app/services/progress-bar.service';
import { BorrowRequest } from 'app/models/borrow-request';
import { RequestView } from 'app/models/request-view';
import { User } from 'app/models/user';
import { Book } from 'app/models/book';

@Component({
  selector: 'btc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../styles/book-styles.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // data
  myBooks: Book[];
  selectedBook: Book;
  myRequests: [{Book, Request}];

  get currentUser() {
    return this.auth.currentUser;
  }

  // UI properties
  modalActions = new EventEmitter<string|MaterializeAction>();
  activeTab = 'Collection';
  linkClass = {
    collection: 'active',
    requests: ''
  };
  message: string;

  constructor(
    private auth: AuthService,
    private pBarService: ProgressBarService,
    private bookService: BookService,
    private requestService: RequestService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
    this.getMyBooks();
    this.getMyRequests();
  }

  private getMyBooks(): void {
    this.bookService.getMyBooks(this.currentUser._id)
      .subscribe(data => {
        this.myBooks = data;
      }, err => {
        this.message = 'user data currently unavailable';
      });
  }

  private getMyRequests(): void {
    this.requestService
      .getMyRequests(this.currentUser._id)
      .subscribe((data: [{ Book, Request }]) => {
        this.myRequests = data;
      }, err => {
        this.message = 'user data currently unavailable';
      });
  }

  public showContent(link): void {
    this.activeTab = link;
    this.linkClass.collection = link === 'Collection' ? 'active' : '';
    this.linkClass.requests = link === 'Requests' ? 'active' : '';
  }

  public deleteBook(book): void {
    this.pBarService.showProgressBar();
    this.bookService
      .deleteBookById(book._id)
      .subscribe(res => {
        if (res.status === 200) {
          this.pBarService.hideProgressBar();
          this.ngOnInit();
          this.notify.success(book.title, 'This book was removed from your collection');
        }
    });
  }

  public cancelRequest(request): void {
    this.pBarService.showProgressBar();
    this.requestService
      .deleteRequestById(request._id)
      .subscribe(res => {
        if (res.status === 200) {
          this.pBarService.hideProgressBar();
          this.ngOnInit();
          this.notify.success(request.ownerName, `Your request to ${request.ownerName} was cancelled`);
        }
      });
  }

  // not in use
  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  public closeModal(): void {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

}
