import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddBooksService } from './add-books.service';

@Component({
  selector: 'btc-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  titleQuery: string;
  authorQuery: string;

  constructor(
    private _books: AddBooksService
  ) { }

  ngOnInit() {
  }

  searchBooksAPI(): void {
    let query = {
      titleQuery: this.titleQuery,
      authorQuery: this.authorQuery
    };
    console.log({ titleQuery: this.titleQuery, authorQuery: this.authorQuery });
    this._books.searchBooks(this.titleQuery, this.authorQuery);
  }

}
