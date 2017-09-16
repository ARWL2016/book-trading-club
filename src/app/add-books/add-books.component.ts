import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'app/services/auth.service';
import { BookService } from "app/services/book.service";
import { GoogleBooksApiService } from "app/services/google-books-api.service";
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from "app/services/progress-bar.service";

@Component({
  selector: 'btc-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  titleQuery: string;
  authorQuery: string;
  bookData: Book[];
  modalActions = new EventEmitter<string|MaterializeAction>();
  selectedBook: Book;
  username: string;
  nullResultError: string;
  error: string;
  modalProgressBar = false;

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private gBooksApiService: GoogleBooksApiService,
    private router: Router,
    private notify: NotificationsService,
    private pBarService: ProgressBarService

  ) { }

  ngOnInit() {
    this.username = this.authService.isValidated();
  }

  searchBooksAPI() {
    this.error = '';
    if (!this.titleQuery) {
      return this.error = 'enter a title or keyword';
    }
    this.nullResultError = '';
    this.bookData = [];
    this.pBarService.showProgressBar();
    const query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this.gBooksApiService.searchBooks(this.titleQuery, this.authorQuery)
      .then(data => {
        if (data) {
          this.bookData = data;
          console.log(this.bookData);
          this.pBarService.hideProgressBar();
        } else {
          this.nullResultError = 'The search returned no results';
          this.pBarService.hideProgressBar();
        }
      });
  }


  openModal(book) {
    this.selectedBook = book;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal", params:['close']});
  }

  linkToAuthPage(e) {
    this.closeModal();
    if (e.target.firstChild.data === 'register') {
      return this.router.navigate(['/register']);
    }
    this.router.navigate(['/login']);
  }

  addBook() {
    this.modalProgressBar = true;
    const book = this.selectedBook;
    this.bookService.addBookToCollection(book)
    .subscribe(res => {
      console.log(res);
      this.closeModal();
      this.notify.success(this.selectedBook.title, 'This book was added to your collection');
      this.modalProgressBar = false;
    }, err => {
      console.log(err);
      this.modalProgressBar = false;
    });
    // need some error handling here

  }

}

