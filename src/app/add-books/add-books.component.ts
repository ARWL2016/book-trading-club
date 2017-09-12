import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'app/services/auth.service';
import { BookService } from "app/services/book.service";
import { GoogleBooksApiService } from "app/services/google-books-api.service";
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'btc-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  titleQuery: string;
  authorQuery: string;
  bookData: Book[] | { error: string };
  modalActions = new EventEmitter<string|MaterializeAction>();
  selectedBook: Book;
  username: string;


  constructor(

    private authService: AuthService,
    private bookService: BookService,
    private gBooksApiService: GoogleBooksApiService,
    private router: Router,
    private notify: NotificationsService

  ) { }

  ngOnInit() {
    this.username = this.authService.isValidated();
  }

  searchBooksAPI() {
    const query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this.gBooksApiService.searchBooks(this.titleQuery, this.authorQuery)
      .then(data => {
        this.bookData = data;
        console.log(this.bookData);
      });
  }

  openModal(book) {
    this.selectedBook = book;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal", params:['close']});
  }

  authenticate(e) {
    this.closeModal();
    if (e.target.firstChild.data === 'register') {
      return this.router.navigate(['/register']);
    }
    this.router.navigate(['/login']);
  }

  addBook() {
    const book = this.selectedBook;
    this.bookService.addBookToCollection(book);
    this.closeModal();
    // need some error handling here
    this.notify.success(this.selectedBook.title, 'This book was added to your collection');
  }

}

