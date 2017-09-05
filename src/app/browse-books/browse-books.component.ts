import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowseBooksService } from './browse-books.service';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";

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

  constructor(
    private browse: BrowseBooksService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = this.auth.isValidated();
    this.browse.getAllBooks()
      .subscribe(data => {
       this.bookData = data;
      });
  }

  searchBooks() {
    const query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    // this.books.searchBooks(this.titleQuery, this.authorQuery)
    //   .then(data => {
    //     this.bookData = data;
    //     console.log(this.bookData);
    //   });
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

  requestBook() {
    const user = {username: this.username };
    const book = this.selectedBook;
    // this.books.addBookToCollection(user, book);
    this.closeModal();
  }

}
