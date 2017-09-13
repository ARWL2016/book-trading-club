import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'app/services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { BookService } from "app/services/book.service";
import { RequestService } from "app/services/request.service";
import { Book } from '../models/book';
import { ProgressBarService } from "app/services/progress-bar.service";

@Component({
  selector: 'btc-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss']
})
export class BrowseBooksComponent implements OnInit {
  titleQuery: string;
  // authorQuery: string;
  bookData: Book[];
  modalActions = new EventEmitter<string|MaterializeAction>();
  selectedBook: Book;
  username: string;
  nullResult: string;

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private requestService: RequestService,
    private router: Router,
    private notify: NotificationsService,
    private pBarService: ProgressBarService
  ) { }

  ngOnInit() {
    this.username = this.authService.isValidated();
    this.bookService.getAllBooks()
      .subscribe(data => {
        const filteredData = this.removeCurrentUsersBooks(data);
        const flaggedData = this.addAlreadyRequestedFlag(filteredData);
        console.log(flaggedData);
        this.bookData = flaggedData;
      });
  }

  searchBooks() {
    this.pBarService.showProgressBar();
    this.nullResult = undefined;
    this.bookData = undefined;
    const query = {
      titleQuery: this.titleQuery,
      // authorQuery: this.authorQuery
    };
    this.bookService.searchBooks(this.titleQuery)
      .subscribe(data => {
        if (data.length > 0) {
          console.log(data);
          this.bookData = data;
        } else {
          this.nullResult = 'Nothing to see here...';
        }
        this.pBarService.hideProgressBar();
      });
  }

  requestBook() {
    // the book owner ID is on the book object
    // the requester is the current user
    this.pBarService.showProgressBar();
    const user = {username: this.username };
    const book = this.selectedBook;
    this.requestService.requestBook(user, book).subscribe(res => {
      this.notify.success(book.title, 'This book was requested.');

      this.bookData.forEach(item => {
        if (item._id === book._id) {
          item.requested = true;
        }
      });
      this.pBarService.hideProgressBar();
    }, err => {
      console.log(err);
      this.pBarService.hideProgressBar();
    });
    this.closeModal();
  }

  removeCurrentUsersBooks(bookData) {
    const currentUserId = this.authService.getCurrentUserId();
    const filteredData = bookData.filter(book => {
      return book.userId !== currentUserId;
    });
    return filteredData;
  }

  addAlreadyRequestedFlag(bookData) {
    bookData.forEach(book => {
      book.requested = false;
      book.usersRequesting.forEach(username => {
        if (username === this.username) {
          book.requested = true;
        }
      });
    });
    return bookData;
  }

  openModal(book) {
    this.selectedBook = book;
    console.log(this.selectedBook);
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  authenticate(e) {
    this.closeModal();
    if (e.target.firstChild.data === 'register') {
      return this.router.navigate(['/register']);
    }
    this.router.navigate(['/login']);
  }


}
