import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from 'app/services/auth.service';
import { BookService } from 'app/services/book.service';
import { ProgressBarService } from 'app/services/progress-bar.service';
import { RequestService } from 'app/services/request.service';
import { Book } from '../models/book';

@Component({
  selector: 'btc-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['../styles/book-styles.scss', '../styles/form-styles.scss']
})
export class BrowseBooksComponent implements OnInit {

  // form model
  titleQuery: string;

  // data
  bookData: Book[];
  selectedBook: Book;

  get username() {
    return this.authService.isValidated();
  }

  // UI properties
  helpMessage: string;
  modalProgressBar = false;
  modalActions = new EventEmitter<string|MaterializeAction>();
  keywordSearch = false;

  // paging properties
  skip = 0;
  limit = 12;
  booksInCollection: Number;
  get lastBook() {
    const last = this.skip + this.limit;
    return last > this.booksInCollection ? this.booksInCollection : last;
  }

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private requestService: RequestService,
    private router: Router,
    private notify: NotificationsService,
    private pBarService: ProgressBarService
  ) { }

  ngOnInit(): void {
    this.pBarService.showProgressBar();
    this.getBookCount();
    // this.getAllBooks();
    this.getBooksByOffset(0, this.limit);
  }

  // DATA METHODS

  public getBookCount(): void {
    this.bookService.getBookCount()
      .subscribe(data => {
        this.booksInCollection = data.count;
      }, err => {
        console.log('Cannot return book count');
      });
  }

  // public getAllBooks(): void {
  //   this.helpMessage = '';
  //   this.bookService.getAllBooks()
  //     .subscribe(data => {
  //       // const filteredData = this.removeCurrentUsersBooks(data);
  //       this.bookData = this.addAlreadyRequestedFlag(data);
  //       this.pBarService.hideProgressBar();
  //     }, err => {
  //       this.notify.error('Error', 'Unable to fetch data.')
  //       this.pBarService.hideProgressBar();
  //     });
  // }

  public getBooksByOffset(skip: number, limit: number): void {
    this.keywordSearch = false;
    this.bookService.getBooksByOffset(skip, limit)
    .subscribe(data => {
      this.bookData = this.addAlreadyRequestedFlag(data);
      console.log(this.bookData);
      this.pBarService.hideProgressBar();
    }, err => {
      this.notify.error('Error', 'Unable to fetch data.');
      this.pBarService.hideProgressBar();
    });
  }

  public searchBooks(): void {
    if (!this.titleQuery) {return;}
    this.keywordSearch = true;
    this.pBarService.showProgressBar();
    this.helpMessage = '';
    this.bookData = [];
    this.bookService
      .searchBooks(this.titleQuery)
      .subscribe(data => {
        if (data.length > 0) {
          this.bookData = data;
        } else {
          this.helpMessage = 'Nothing to see here...';
        }
        this.pBarService.hideProgressBar();
      }, err => {
        this.helpMessage = 'unable to fetch data';
        this.pBarService.hideProgressBar();
      });
  }

  public requestBook(): void {
    this.modalProgressBar = true;
    const book = this.selectedBook;
    this.requestService
      .requestBook({ username: this.username }, book)
      .subscribe(res => {
        this.notify.success(book.title, 'This book was requested.');
        this.modalProgressBar = false;
        this.bookData.forEach(item => {
          if (item._id === book._id) {
            // add requested flag to book in array
            item.requested = true;
          }
        });
      }, err => {
        this.notify.error(book.title, 'Sorry, this book cannot be requested right now.');
        this.modalProgressBar = false;
      });
    this.closeModal();
  }

  private addAlreadyRequestedFlag(bookData): Book[] {
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


  // UI METHODS

  public openModal(book): void {
    this.selectedBook = book;
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  public closeModal(): void {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  public authenticate(path): void {
    this.closeModal();
    this.router.navigate([path]);
  }


  // PAGING METHODS
  public getNext(): void {
    if (this.skip + this.limit < this.booksInCollection) {
      this.skip += this.limit;
      this.getBooksByOffset(this.skip, this.limit);
    }
  }

  public getPrevious(): void {
    if (this.skip >= this.limit) {
      this.skip -= this.limit;
      this.getBooksByOffset(this.skip, this.limit);
    }
  }
}
