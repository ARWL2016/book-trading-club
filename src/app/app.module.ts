import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { CreateTopicGuard } from 'app/services/create-topic-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    AuthService,
    HelperService,
    CreateTopicGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
