import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddBooksService } from './add-books.service';
import { Book } from '../models/book';

@Component({
  selector: 'btc-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  titleQuery: string;
  authorQuery: string;
  bookData: Book[] | { error: string };

  constructor(
    private _books: AddBooksService
  ) { }

  ngOnInit() {
  }

  searchBooksAPI() {
    let query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this._books.searchBooks(this.titleQuery, this.authorQuery)
      .then(data => {
        this.bookData = data;
        console.log(this.bookData);
      });

  }

}
