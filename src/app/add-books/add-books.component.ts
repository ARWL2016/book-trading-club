import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'app/services/auth.service';
import { BookService } from 'app/services/book.service';
import { GoogleBooksApiService } from 'app/services/google-books-api.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from 'app/services/progress-bar.service';

@Component({
  selector: 'btc-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent {

  // form model
  titleQuery: string;
  authorQuery: string;

  // data
  bookData: Book[];
  selectedBook: Book;
  get username () {
    return this.authService.isValidated();
  }

  // UI props
  modalActions = new EventEmitter<string|MaterializeAction>();
  helpMessage: string;
  modalProgressBar = false;

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private gBooksApiService: GoogleBooksApiService,
    private router: Router,
    private notify: NotificationsService,
    private pBarService: ProgressBarService
  ) { }

  public searchBooksAPI(form): void {

    this.bookData = [];
    this.pBarService.showProgressBar();

    this.gBooksApiService
      .searchBooks(form.value)
      .then(data => {
        this.bookData = data;
        this.pBarService.hideProgressBar();
      })
      .catch(e => {
        this.helpMessage = 'The search returned no results';
        this.pBarService.hideProgressBar();
      });
  }

  public openModal(book): void {
    this.selectedBook = book;
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  public closeModal(): void {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  public linkToAuthPage(e): void {
    this.closeModal();
    if (e.target.firstChild.data === 'register') {
      this.router.navigate(['/register']);
      return;
    }
    this.router.navigate(['/login']);
  }

  public addBook(): void {
    this.modalProgressBar = true;
    this.bookService
      .addBookToCollection(this.selectedBook)
      .subscribe(res => {
        this.closeModal();
        this.notify.success(this.selectedBook.title, 'This book was added to your collection');
        this.modalProgressBar = false;
      }, err => {
        if (err.status === 409) {
          this.notify.error(this.selectedBook.title, 'This book already exists in your collection');
        }
        this.modalProgressBar = false;
      });

  }

}

