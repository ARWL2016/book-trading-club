import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddBooksService } from './add-books.service';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from "app/services/auth.service";

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

  constructor(
    private books: AddBooksService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  searchBooksAPI() {
    let query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this.books.searchBooks(this.titleQuery, this.authorQuery)
      .then(data => {
        this.bookData = data;
        console.log(this.bookData);
      });
  }

  openModal(book) {
    this.selectedBook = book;
    console.log(this.selectedBook);
    this.modalActions.emit({action:"modal", params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal", params:['close']});
  }
}

