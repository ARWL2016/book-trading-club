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
import { CreateTopicGuard } from 'app/services/create-topic-guard.service';
import { AddBooksService } from 'app/add-books/add-books.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    MaterializeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'add', component: AddBooksComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    AddBooksService,
    AuthService,
    HelperService,
    CreateTopicGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
