import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { AddBooksComponent } from './add-books/add-books.component';

import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { IsValidatedGuard } from 'app/services/is-validated-guard.service';
import { AddBooksService } from 'app/add-books/add-books.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BrowseBooksService } from "app/browse-books/browse-books.service";


@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    RegisterComponent,
    LoginComponent,
    BrowseBooksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    MaterializeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'browse', component: BrowseBooksComponent },
      { path: 'add', component: AddBooksComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    AddBooksService,
    BrowseBooksService,
    AuthService,
    HelperService,
    IsValidatedGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
