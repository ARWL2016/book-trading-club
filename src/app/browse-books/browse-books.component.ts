import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowseBooksService } from './browse-books.service';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'btc-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss']
})
export class BrowseBooksComponent implements OnInit {
  titleQuery: string;
  authorQuery: string;
  bookData: Book[] | { error: string };
  modalActions = new EventEmitter<string|MaterializeAction>();
  selectedBook: Book;
  username: string;
  nullResult: string;

  constructor(
    private browse: BrowseBooksService,
    private auth: AuthService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
    this.username = this.auth.isValidated();
    this.browse.getAllBooks()
      .subscribe(data => {
        let filteredData = this.removeCurrentUsersBooks(data);
        console.log(filteredData);
       this.bookData = filteredData;
      });
  }

  searchBooks() {
    this.nullResult = undefined;
    this.bookData = undefined;
    const query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this.browse.searchBooks(this.titleQuery, this.authorQuery)
      .subscribe(data => {
        if (data.length > 0) {
          console.log(data);
          return this.bookData = data;
        }
        this.nullResult = 'Nothing to see here...';
      });
  }

  removeCurrentUsersBooks(bookData) {
    let currentUserId = this.auth.getCurrentUserId();
    console.log(currentUserId, typeof currentUserId);
    let filteredData = bookData.filter(book => {
      return book.userId !== currentUserId;
    })
    console.log(filteredData);
    return filteredData;
  }

  openModal(book) {
    this.selectedBook = book;
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

  requestBook() {
    // the book owner ID is on the book object
    // the requester is the current user
    const user = {username: this.username };
    const book = this.selectedBook;
    this.browse.requestBook(user, book);
    this.closeModal();
    this.notify.success(this.selectedBook.title, 'This book was requested.');
  }

}
