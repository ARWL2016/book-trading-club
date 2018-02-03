webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-books/add-books.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"btc-instruction-panel\">\r\n  <h5>Search Google Books</h5>\r\n  <p>On this page, you can search Google Books for titles to add to your collection. Other users\r\n  will be able to see the books you add and send you borrow requests.</p>\r\n</section>\r\n\r\n<!-- SEARCH FORM -->\r\n<section class=\"row\">\r\n  <form materialize class=\"col s12\" #form=\"ngForm\" (submit)=\"searchBooksAPI(form)\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s6\">\r\n        <input\r\n          [(ngModel)]=\"titleQuery\"\r\n          type=\"text\"\r\n          name=\"titleQuery\"\r\n          id=\"titleQuery\"\r\n          required>\r\n          <label for=\"titleQuery\">Title</label>\r\n      </div>\r\n      <div class=\"input-field col s6\">\r\n        <input\r\n          [(ngModel)]=\"authorQuery\"\r\n          type=\"text\"\r\n          name=\"authorQuery\"\r\n          id=\"authorQuery\">\r\n        <label for=\"authorQuery\">Author (optional)</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"btn waves-effect waves-light btc-btn\" type=\"submit\" [disabled]=\"!titleQuery\">Search\r\n        <i class=\"material-icons right\">search</i>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</section>\r\n\r\n<p *ngIf=\"helpMessage\" class=\"btc-search-error\">{{helpMessage}}</p>\r\n\r\n<!-- RESULTS SECTION -->\r\n<section class=\"row\">\r\n  <div class=\"col s6 m4 l3 btc-book-preview\" *ngFor=\"let book of bookData\" (click)=\"openModal(book)\">\r\n    <div class=\"btc-book-preview-image-container\">\r\n      <img class=\"btc-book-preview-image\" src=\"{{book.imageLinks.thumbnail}}\" >\r\n    </div>\r\n\r\n    <p class=\"btc-book-preview-title\">{{book.title}}</p>\r\n    <p class=\"btc-book-preview-author\">{{book.authors[0]}}</p>\r\n  </div>\r\n</section>\r\n\r\n<!-- MODAL -->\r\n<section id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\r\n  <div *ngIf=\"modalProgressBar\" class=\"progress btc-modal-progress-bar\">\r\n    <div class=\"indeterminate\"></div>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedBook\" class=\"modal-content\">\r\n\r\n    <div class=\"btc-modal-img-wrapper\">\r\n      <img src=\"{{selectedBook.imageLinks.thumbnail}}\" />\r\n    </div>\r\n\r\n    <div class=\"btc-modal-text\">\r\n      <h4 class=\"btc-modal-title\">{{selectedBook.title}}</h4>\r\n      <p *ngIf=\"selectedBook.subtitle\" class=\"btc-modal-subtitle\">{{selectedBook.subtitle}}</p>\r\n      <div>By&nbsp;\r\n        <span *ngFor=\"let author of selectedBook.authors\" class=\"btc-modal-author\">{{author}}&nbsp;&nbsp;</span>\r\n      </div>\r\n      <span *ngIf=\"selectedBook.publisher\">Published by {{selectedBook.publisher}} </span>\r\n      <span *ngIf=\"selectedBook.publishedDate\">({{selectedBook.publishedDate}})</span>\r\n\r\n      <p *ngIf=\"selectedBook.pageCount\" class=\"btc-modal-pageCount\">{{selectedBook.pageCount}} pages</p>\r\n      <p *ngIf=\"!username\" class=\"anon-user-message\">To add books to your collection, please\r\n        <a class=\"modal-link\" (click)=\"linkToAuthPage($event)\">register</a> or <a class=\"modal-link\" (click)=\"linkToAuthPage($event)\">log in</a>.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer btc-modal-footer\">\r\n    <a *ngIf=\"username\" class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"addBook()\">Add to Collection<i class=\"material-icons right\">add_circle</i></a>\r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close<i class=\"material-icons right\">cancel</i></a>\r\n  </div>\r\n\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/add-books/add-books.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btc-instruction-panel {\n  background-color: #eee;\n  padding: 15px 40px 15px 40px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 5px;\n  line-height: 1.8em;\n  letter-spacing: 1px; }\n\n.btc-panel-link {\n  font-weight: bold; }\n\n.btc-btn {\n  background-color: #37395d; }\n\n.btc-get-all-btn {\n  margin-left: 5px; }\n\n.btc-books-count {\n  font-size: 1em;\n  font-style: italic;\n  padding: 10px 10px;\n  color: #333;\n  float: right; }\n\n.btc-book-preview {\n  height: 360px; }\n\n.btc-book-preview-image-container {\n  background: #555;\n  height: 240px;\n  overflow: hidden;\n  position: relative; }\n\n.btc-book-preview-image-container:hover {\n    cursor: pointer; }\n\n.btc-book-preview-image {\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.btc-book-preview-image:hover {\n    opacity: 0.4; }\n\n.btc-book-preview-title {\n  font-weight: bold;\n  margin-bottom: 0; }\n\n.btc-book-preview-author {\n  margin: 3px 0 0 0;\n  font-size: 0.9em;\n  color: #444; }\n\n.btc-modal-progress-bar {\n  margin-top: 0; }\n\n.btc-modal-text {\n  float: left;\n  max-width: 60%; }\n\n.btc-modal-img-wrapper {\n  float: left;\n  margin-right: 20px; }\n\n.btc-modal-chip {\n  display: block;\n  margin-top: 10px;\n  background-color: #37395d;\n  text-align: center;\n  color: white; }\n\n.btc-modal-footer {\n  clear: both; }\n\n.btc-modal-title {\n  font-weight: bold;\n  font-size: 2.5em; }\n\n.btc-modal-subtitle {\n  font-weight: bold;\n  font-size: 1.2em; }\n\n.btc-modal-author {\n  font-size: 1.1em; }\n\n.btc-modal-pageCount {\n  font-style: italic;\n  font-size: 0.9em;\n  color: #444; }\n\n.modal-link:hover {\n  cursor: pointer; }\n\n.btc-paging-section {\n  margin: 0 auto;\n  margin-bottom: 50px;\n  padding: 5px;\n  text-align: center; }\n\n@media screen and (max-width: 600px) {\n  h1.btc-modal-title {\n    font-size: 1.8em;\n    margin: 4px 0; }\n  .btc-modal-content {\n    padding: 16px; }\n  .btc-modal-img-wrapper {\n    float: none; }\n  .btc-modal-text {\n    max-width: 100%; }\n  .btc-modal-img-wrapper img {\n    display: none; } }\n\n@media screen and (max-width: 400px) {\n  button.btc-btn {\n    display: block;\n    width: 80%;\n    margin: 10px auto; } }\n\n/* label color */\n\n.input-field label {\n  color: #1f1f1f; }\n\n/* label focus color */\n\n.input-field input[type=text]:focus + label,\n.input-field input[type=password]:focus + label {\n  color: #1f1f1f; }\n\n/* label underline focus color */\n\n.input-field input[type=text]:focus,\n.input-field input[type=password]:focus {\n  border-bottom: 1px solid #1f1f1f;\n  -webkit-box-shadow: 0 1px 0 0 #1f1f1f;\n          box-shadow: 0 1px 0 0 #1f1f1f; }\n\n.input-field .prefix.active {\n  color: #5d4037; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-books/add-books.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/services/book.service.ts");
var google_books_api_service_1 = __webpack_require__("../../../../../src/app/services/google-books-api.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var AddBooksComponent = (function () {
    function AddBooksComponent(authService, bookService, gBooksApiService, router, notify, pBarService) {
        this.authService = authService;
        this.bookService = bookService;
        this.gBooksApiService = gBooksApiService;
        this.router = router;
        this.notify = notify;
        this.pBarService = pBarService;
        // UI props
        this.modalActions = new core_1.EventEmitter();
        this.modalProgressBar = false;
    }
    Object.defineProperty(AddBooksComponent.prototype, "username", {
        get: function () {
            return this.authService.isValidated();
        },
        enumerable: true,
        configurable: true
    });
    AddBooksComponent.prototype.searchBooksAPI = function (form) {
        var _this = this;
        this.bookData = [];
        this.pBarService.showProgressBar();
        this.gBooksApiService
            .searchBooks(form.value)
            .then(function (data) {
            _this.bookData = data;
            _this.pBarService.hideProgressBar();
        })
            .catch(function (e) {
            _this.helpMessage = 'The search returned no results';
            _this.pBarService.hideProgressBar();
        });
    };
    AddBooksComponent.prototype.openModal = function (book) {
        this.selectedBook = book;
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    AddBooksComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    AddBooksComponent.prototype.linkToAuthPage = function (e) {
        this.closeModal();
        if (e.target.firstChild.data === 'register') {
            this.router.navigate(['/register']);
            return;
        }
        this.router.navigate(['/login']);
    };
    AddBooksComponent.prototype.addBook = function () {
        var _this = this;
        this.modalProgressBar = true;
        this.bookService
            .addBookToCollection(this.selectedBook)
            .subscribe(function (res) {
            console.log(res);
            _this.closeModal();
            _this.notify.success(_this.selectedBook.title, 'This book was added to your collection');
            _this.modalProgressBar = false;
        }, function (err) {
            console.log(err);
            _this.modalProgressBar = false;
        });
    };
    return AddBooksComponent;
}());
AddBooksComponent = __decorate([
    core_1.Component({
        selector: 'btc-add-books',
        template: __webpack_require__("../../../../../src/app/add-books/add-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-books/add-books.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof book_service_1.BookService !== "undefined" && book_service_1.BookService) === "function" && _b || Object, typeof (_c = typeof google_books_api_service_1.GoogleBooksApiService !== "undefined" && google_books_api_service_1.GoogleBooksApiService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _e || Object, typeof (_f = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _f || Object])
], AddBooksComponent);
exports.AddBooksComponent = AddBooksComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ANGULAR NOTIFICATIONS COMPONENT -->\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<!-- NAVIGATION SECTION -->\r\n<nav class=\"brown darken-2\" role=\"navigation\">\r\n  <div class=\"nav-wrapper container\">\r\n    <a [routerLink]=\"['/browse']\" class=\"btc-logo\">\r\n      <i class=\"material-icons left btc-logo-icon\">bookmark_border</i>\r\n    </a>\r\n\r\n    <!-- NAV LINKS -->\r\n    <ul id=\"nav-mobile\" class=\"right btc-nav-links\">\r\n      <li [ngClass]=\"{'active': activeLink==='/browse'}\"><a (click)=\"routerLink('/browse')\"></a></li>\r\n      <li [ngClass]=\"{'active': activeLink==='/add'}\"><a (click)=\"routerLink('/add')\"></a></li>\r\n      <li [ngClass]=\"{'active': activeLink==='/register'}\" *ngIf=\"!username\"><a (click)=\"routerLink('/register')\">Register</a></li>\r\n      <li [ngClass]=\"{'active': activeLink==='/login'}\" *ngIf=\"!username\"><a (click)=\"routerLink('/login')\">Login</a></li>\r\n\r\n      <!-- DROPDOWN FOR LOGGED IN STATE -->\r\n      <li *ngIf=\"username\" class=\"btc-dropdown-list-item\">\r\n        <a><i (click)=\"toggleDropdown()\" id=\"dropdownIcon\" class=\"material-icons btc-account-icon\">account_circle</i></a>\r\n        <ul *ngIf=\"dropdownVisible\" (click)=\"toggleDropdown()\" class=\"dropdown-content btc-dropdown-content\">\r\n          <li><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n          <li class=\"divider\"></li>\r\n          <li><a (click)=\"signOut()\">Sign Out</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<!-- PROGRESS BAR -->\r\n<div *ngIf=\"progressBar\" class=\"progress btc-progress-bar\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n\r\n<main class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btc-logo {\n  font-weight: bold;\n  font-size: 1.5em; }\n\n.btc-logo:before {\n  content: 'Book Exchange'; }\n\n.btc-logo-icon {\n  font-size: 35px;\n  margin-right: 10px !important; }\n\n.btc-nav-links > li:nth-child(1) > a:before {\n  content: 'Browse Books'; }\n\n.btc-nav-links > li:nth-child(2) > a:before {\n  content: 'Add Books'; }\n\n.btc-dropdown-list-item {\n  margin-right: 50px; }\n\n.btc-progress-bar {\n  margin-top: 0; }\n\n.btc-account-icon {\n  font-size: 30px; }\n\n.btc-dropdown-content {\n  display: block;\n  opacity: 100; }\n\n@media screen and (max-width: 700px) {\n  .btc-logo:before {\n    content: 'BEX'; }\n  .btc-nav-links > li:nth-child(1) > a:before {\n    content: 'Browse'; }\n  .btc-nav-links > li:nth-child(2) > a:before {\n    content: 'Add'; } }\n\n@media screen and (max-width: 460px) {\n  .btc-logo:before {\n    content: ''; } }\n\n@media screen and (max-width: 420px) {\n  .btc-logo {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var AppComponent = (function () {
    function AppComponent(auth, progressBarService, router, notify) {
        this.auth = auth;
        this.progressBarService = progressBarService;
        this.router = router;
        this.notify = notify;
        // UI properties
        this.activeLink = '';
        this.dropdownVisible = false;
        this.progressBar = true;
        // angular notifications config
        this.options = {
            timeOut: 3000,
            lastOnBottom: true,
            showProgressBar: false,
            pauseOnHover: true
        };
    }
    Object.defineProperty(AppComponent.prototype, "username", {
        get: function () {
            return this.auth.isValidated();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngDoCheck = function () {
        this.progressBar = this.progressBarService.status;
        this.activeLink = this.router.url;
    };
    AppComponent.prototype.routerLink = function (link) {
        this.router.navigate([link]);
        this.activeLink = link;
    };
    AppComponent.prototype.toggleDropdown = function () {
        this.dropdownVisible = !this.dropdownVisible;
    };
    AppComponent.prototype.removeDropdown = function (e) {
        if (e.target.id !== 'dropdownIcon') {
            this.dropdownVisible = false;
        }
    };
    AppComponent.prototype.signOut = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
        this.notify.info(this.username, 'You have been logged out');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        // tslint:disable-next-line:use-host-property-decorator
        host: {
            '(click)': 'removeDropdown($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _d || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var angular2_materialize_1 = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var add_books_component_1 = __webpack_require__("../../../../../src/app/add-books/add-books.component.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var is_validated_guard_service_1 = __webpack_require__("../../../../../src/app/services/is-validated-guard.service.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var browse_books_component_1 = __webpack_require__("../../../../../src/app/browse-books/browse-books.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/services/book.service.ts");
var request_service_1 = __webpack_require__("../../../../../src/app/services/request.service.ts");
var google_books_api_service_1 = __webpack_require__("../../../../../src/app/services/google-books-api.service.ts");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            add_books_component_1.AddBooksComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            browse_books_component_1.BrowseBooksComponent,
            profile_component_1.ProfileComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            angular2_notifications_1.SimpleNotificationsModule.forRoot(),
            angular2_materialize_1.MaterializeModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'browse', component: browse_books_component_1.BrowseBooksComponent },
                { path: 'add', component: add_books_component_1.AddBooksComponent },
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: '', redirectTo: 'browse', pathMatch: 'full' },
                { path: '**', redirectTo: 'browse', pathMatch: 'full' }
            ])
        ],
        providers: [
            auth_service_1.AuthService,
            book_service_1.BookService,
            request_service_1.RequestService,
            google_books_api_service_1.GoogleBooksApiService,
            progress_bar_service_1.ProgressBarService,
            helper_service_1.HelperService,
            is_validated_guard_service_1.IsValidatedGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"btc-form-wrapper\">\r\n  <div class=\"btc-form-header\">\r\n    <h2 class=\"btc-form-heading\">Login</h2>\r\n  </div>\r\n\r\n  <form materialize #form=\"ngForm\" (submit)=\"submitForm()\" novalidate>\r\n    <div class=\"btc-input-wrapper\">\r\n\r\n      <!-- USERNAME FIELD -->\r\n      <div class=\"input-field\">\r\n        <input\r\n          [(ngModel)]=\"user.username\"\r\n          #inp1=\"ngModel\"\r\n          name=\"username\"\r\n          id=\"username\"\r\n          type=\"text\"\r\n          required\r\n          minlength=\"3\">\r\n        <label for=\"username\">Username</label>\r\n      </div>\r\n\r\n      <!-- PASSWORD FIELD -->\r\n      <div class=\"input-field\">\r\n        <input\r\n          [(ngModel)]=\"user.password\"\r\n          #inp2=\"ngModel\"\r\n          name=\"password\"\r\n          id=\"password\"\r\n          type=\"text\"\r\n          required\r\n          minlength=\"3\">\r\n        <label  for=\"password\">Password</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"this.error\" class=\"btc-error\">\r\n      {{error}}\r\n    </div>\r\n\r\n    <div class=\"btc-form-button-wrapper\">\r\n      <button class=\"btn waves-effect waves-light btc-btn\" type=\"submit\" [disabled]=\"form.invalid\">Login\r\n        <i class=\"material-icons right\">check</i>\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  This component submits User credentials to the server. If login is successful, it navigates to Browse-Books.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var LoginComponent = (function () {
    function LoginComponent(auth, progressBarService, router, notify) {
        this.auth = auth;
        this.progressBarService = progressBarService;
        this.router = router;
        this.notify = notify;
        this.user = { username: '', password: '' };
    }
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        this.error = '';
        this.progressBarService.showProgressBar();
        this.auth.login(this.user)
            .then(function () {
            _this.router.navigate(['/browse']);
            _this.notify.success(_this.user.username, 'You have been logged in');
            _this.progressBarService.hideProgressBar();
        })
            .catch(function () {
            // TODO: handle 500 errors
            _this.error = 'Your login details were incorrect.';
            _this.progressBarService.hideProgressBar();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'btc-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/auth-styles.scss"), __webpack_require__("../../../../../src/app/styles/form-styles.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _d || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"btc-form-wrapper\">\r\n  <div class=\"btc-form-header\">\r\n    <h2 class=\"btc-form-heading\">Register</h2>\r\n  </div>\r\n\r\n  <form materialize #form=\"ngForm\" (submit)=\"submitForm()\" novalidate>\r\n    <div class=\"btc-input-wrapper\">\r\n\r\n      <!-- USERNAME FIELD -->\r\n      <div class=\"input-field btc-input-field\">\r\n          <i *ngIf=\"usernameValid\" class=\"material-icons prefix btc-check-icon\">check_circle</i>\r\n          <i *ngIf=\"!usernameValid\" class=\"material-icons prefix btc-person-icon brown-text text-darken-2\">person</i>\r\n        <input\r\n          [(ngModel)]=\"user.username\"\r\n          (blur)=\"checkUsername()\"\r\n          (focus)=\"resetUsernameCheck()\"\r\n          name=\"username\"\r\n          id=\"username\"\r\n          type=\"text\"\r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"8\">\r\n        <label for=\"username\" class=\"brown-text text-darken-2\">Username</label>\r\n      </div>\r\n\r\n      <!-- PASSWORD FIELD -->\r\n      <div class=\"input-field\">\r\n        <i *ngIf=\"!passwordMatch\" class=\"material-icons prefix btc-lock-icon brown-text text-darken-2\">lock_outline</i>\r\n        <i *ngIf=\"passwordMatch\" class=\"material-icons prefix btc-check-icon\">check_circle</i>\r\n        <input\r\n          [(ngModel)]=\"user.password\"\r\n          (blur)=\"validatePassword()\"\r\n          (keyup)=\"checkMatch()\"\r\n          name=\"password\"\r\n          id=\"password\"\r\n          type=\"password\"\r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"12\">\r\n        <label for=\"password\" class=\"brown-text text-darken-2\">Password</label>\r\n      </div>\r\n\r\n      <!-- PASSWORD CONFIRM FIELD -->\r\n      <div class=\"input-field\">\r\n        <i *ngIf=\"!passwordMatch\" class=\"material-icons prefix btc-lock-icon brown-text text-darken-2\">lock_outline</i>\r\n        <i *ngIf=\"passwordMatch\" class=\"material-icons prefix btc-check-icon\">check_circle</i>\r\n        <input\r\n          [(ngModel)]=\"confirmation\"\r\n          (keyup)=\"checkMatch()\"\r\n          name=\"confirmation\"\r\n          id=\"confirmation\"\r\n          type=\"password\"\r\n          required\r\n          minlength=\"3\"\r\n          maxlength=\"12\">\r\n        <label for=\"confirmation\" class=\"brown-text text-darken-2\">Confirm Password</label>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"btc-error\">\r\n      {{error}}\r\n    </div>\r\n\r\n    <!-- SUBMIT BUTTON -->\r\n    <div class=\"btc-form-button-wrapper\">\r\n      <button class=\"btn waves-effect waves-light btc-btn\" type=\"submit\" [disabled]=\"form.invalid || !usernameValid\">Register\r\n          <i class=\"material-icons right\">check</i>\r\n      </button>\r\n    </div>\r\n\r\n  </form>\r\n</section>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  @prop usernameChecked - true if username has been checked against database
 *  @prop usernameValid - true if username is not already on database
 *  @prop passwordMatch - true of password and confirmation fields match
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var RegisterComponent = (function () {
    function RegisterComponent(auth, progress, notify, router) {
        this.auth = auth;
        this.progress = progress;
        this.notify = notify;
        this.router = router;
        // form model
        this.user = { username: '', password: '' };
        // validation properties
        this.usernameChecked = false;
        this.usernameValid = false;
    }
    // validate locally and then check database
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        if (!this.user.username) {
            return this.error = 'enter a username';
        }
        if (this.user.username.length < 3) {
            return this.error = 'username must be minimum 3 characters';
        }
        if (this.usernameChecked) {
            return;
        }
        this.auth.checkUsername(this.user.username)
            .subscribe(function () {
            _this.usernameChecked = true;
            _this.usernameValid = true;
        }, function () {
            _this.error = 'username already exists';
            _this.usernameChecked = true;
        });
    };
    RegisterComponent.prototype.resetUsernameCheck = function () {
        this.error = '';
        this.usernameChecked = false;
        this.usernameValid = false;
    };
    RegisterComponent.prototype.validatePassword = function () {
        if (this.user.password.length < 3) {
            this.error = 'Password should be at least 3 characters.';
            return false;
        }
        this.error = '';
        return true;
    };
    RegisterComponent.prototype.checkMatch = function () {
        this.passwordMatch = false;
        if (this.confirmation) {
            if (this.user.password === this.confirmation) {
                this.passwordMatch = true;
                this.error = '';
            }
            else {
                this.passwordMatch = false;
            }
        }
    };
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.user.password !== this.confirmation) {
            this.error = 'passwords do not match.';
            return;
        }
        if (this.user.username && this.user.password) {
            this.error = '';
            this.progress.showProgressBar();
            this.auth.register(this.user)
                .then(function (res) {
                _this.router.navigate(['/browse']);
                _this.notify.success(_this.user.username, 'You have been registered and logged in');
                _this.progress.hideProgressBar();
            })
                .catch(function (err) {
                if (err.status === 409) {
                    _this.error = 'Username not available.';
                    _this.progress.hideProgressBar();
                }
                else {
                    _this.error = 'Oops! Something went wrong...';
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'btc-register',
        template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/auth-styles.scss"), __webpack_require__("../../../../../src/app/styles/form-styles.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _b || Object, typeof (_c = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/browse-books/browse-books.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER SECTION -->\r\n<section class=\"btc-instruction-panel\">\r\n  <h4>Welcome to Book Exchange</h4>\r\n  <p>On this page, you can browse books available from our users, and search books by topic or title.\r\n    Click on a book to see more details or make a borrow request.</p>\r\n    <p *ngIf=\"!username\">To borrow books and list your own collection,\r\n      <a [routerLink]=\"['/login']\" class=\"btc-panel-link\">login</a> or\r\n      <a [routerLink]=\"['/register']\" class=\"btc-panel-link\">register</a>\r\n    </p>\r\n    <p *ngIf=\"username\" >Go to the\r\n      <a [routerLink]=\"['/profile']\" class=\"btc-panel-link\">profile page</a>\r\n      to view your collection and requests.\r\n    </p>\r\n</section>\r\n\r\n<!-- SEARCH FORM SECTION -->\r\n<section class=\"row\">\r\n  <form materialize class=\"col s12\" #form=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <input\r\n          [(ngModel)]=\"titleQuery\"\r\n          type=\"text\"\r\n          name=\"titleQuery\"\r\n          id=\"titleQuery\">\r\n        <label for=\"titleQuery\">Title or Keyword Search</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button class=\"btn waves-effect waves-light btc-btn\" (click)=\"searchBooks()\">Search\r\n        <i class=\"material-icons right\">search</i>\r\n      </button>\r\n      <button class=\"btn waves-effect waves-light btc-btn btc-get-all-btn\" (click)=\"getBooksByOffset(skip, limit)\">Recently Added\r\n        <i class=\"material-icons right\">autorenew</i>\r\n      </button>\r\n      <span *ngIf=\"!keywordSearch\" class=\"btc-books-count\">Showing {{ skip + 1 }} to {{ lastBook }} of {{ booksInCollection }} books in collection</span>\r\n      <span *ngIf=\"keywordSearch\" class=\"btc-books-count\">{{ bookData?.length }} results</span>\r\n    </div>\r\n  </form>\r\n</section>\r\n\r\n<!-- RESULTS SECTION -->\r\n<section class=\"row\" >\r\n  <div class=\"col s12 m4 l3 xl2 btc-book-preview\" *ngFor=\"let book of bookData\" href=\"#modal1\" (click)=\"openModal(book)\" >\r\n    <div class=\"btc-book-preview-image-container\" >\r\n      <img class=\"btc-book-preview-image\" src=\"{{book.imageLinks.thumbnail}}\"  >\r\n    </div>\r\n\r\n    <p class=\"btc-book-preview-title\">{{book.title}}</p>\r\n    <p class=\"btc-book-preview-author\">{{book.authors[0]}}</p>\r\n  </div>\r\n</section>\r\n\r\n<!-- PAGING BUTTONS -->\r\n<section class=\"btc-paging-section\" *ngIf=\"!keywordSearch\">\r\n  <button class=\"btn waves-effect waves-light btc-btn\" (click)=\"getPrevious()\" [disabled]=\"skip===0\">\r\n    Previous\r\n    <i class=\"material-icons left\">fast_rewind</i>\r\n  </button>\r\n  <button class=\"btn waves-effect waves-light btc-btn\" (click)=\"getNext()\" [disabled]=\"lastBook===booksInCollection\">\r\n    Next\r\n    <i class=\"material-icons right\">fast_forward</i>\r\n  </button>\r\n</section>\r\n\r\n<p *ngIf=\"helpMessage\" class=\"btc-null-result-message\">{{helpMessage}}</p>\r\n\r\n<!-- MODAL -->\r\n<section id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalActions\">\r\n  <div *ngIf=\"modalProgressBar\" class=\"progress btc-modal-progress-bar\">\r\n    <div class=\"indeterminate\"></div>\r\n  </div>\r\n  <div class=\"modal-content btc-modal-content\">\r\n\r\n    <!-- MODAL IMAGE -->\r\n    <div class=\"btc-modal-img-wrapper\">\r\n      <img src=\"{{selectedBook?.imageLinks.thumbnail}}\" />\r\n      <div class=\"chip btc-modal-chip\" *ngIf=\"selectedBook?.requested\">Requested</div>\r\n      <div class=\"chip btc-modal-chip\" *ngIf=\"selectedBook?.username === username\">Owned</div>\r\n    </div>\r\n\r\n    <!-- MODAL TEXT -->\r\n    <div class=\"btc-modal-text\">\r\n      <h1 class=\"btc-modal-title\">{{selectedBook?.title}}</h1>\r\n      <p *ngIf=\"selectedBook?.subtitle\" class=\"btc-modal-subtitle\">{{selectedBook?.subtitle}}</p>\r\n      <div>By&nbsp;\r\n        <span *ngFor=\"let author of selectedBook?.authors\" class=\"btc-modal-author\">{{author}}&nbsp;&nbsp;</span>\r\n      </div>\r\n      <span *ngIf=\"selectedBook?.publisher\">Published by {{selectedBook?.publisher}} </span>\r\n      <span *ngIf=\"selectedBook?.publishedDate\">({{selectedBook?.publishedDate}})</span>\r\n\r\n      <p *ngIf=\"selectedBook?.pageCount\" class=\"btc-modal-pageCount\">{{selectedBook?.pageCount}} pages</p>\r\n      <p class=\"btc-modal-user\">added by:<b> {{selectedBook?.username}}</b></p>\r\n      <p *ngIf=\"!username\" class=\"anon-user-message\">To request books from other users, please\r\n        <a class=\"modal-link\" (click)=\"authenticate('/register')\">register</a> or <a class=\"modal-link\" (click)=\"authenticate('/login')\">log in</a>.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MODAL FOOTER -->\r\n  <div class=\"modal-footer btc-modal-footer\">\r\n    <a *ngIf=\"username && !selectedBook?.requested  && selectedBook?.username !== username\" class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"requestBook()\">Request<i class=\"material-icons right\">add_circle</i></a>\r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close<i class=\"material-icons right\">cancel</i></a>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/browse-books/browse-books.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/services/book.service.ts");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var request_service_1 = __webpack_require__("../../../../../src/app/services/request.service.ts");
var BrowseBooksComponent = (function () {
    function BrowseBooksComponent(authService, bookService, requestService, router, notify, pBarService) {
        this.authService = authService;
        this.bookService = bookService;
        this.requestService = requestService;
        this.router = router;
        this.notify = notify;
        this.pBarService = pBarService;
        this.modalProgressBar = false;
        this.modalActions = new core_1.EventEmitter();
        this.keywordSearch = false;
        // paging properties
        this.skip = 0;
        this.limit = 12;
    }
    Object.defineProperty(BrowseBooksComponent.prototype, "username", {
        get: function () {
            return this.authService.isValidated();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowseBooksComponent.prototype, "lastBook", {
        get: function () {
            var last = this.skip + this.limit;
            return last > this.booksInCollection ? this.booksInCollection : last;
        },
        enumerable: true,
        configurable: true
    });
    BrowseBooksComponent.prototype.ngOnInit = function () {
        this.pBarService.showProgressBar();
        this.getBookCount();
        // this.getAllBooks();
        this.getBooksByOffset(0, this.limit);
    };
    // DATA METHODS
    BrowseBooksComponent.prototype.getBookCount = function () {
        var _this = this;
        this.bookService.getBookCount()
            .subscribe(function (data) {
            _this.booksInCollection = data.count;
        }, function (err) {
            console.log('Cannot return book count');
        });
    };
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
    BrowseBooksComponent.prototype.getBooksByOffset = function (skip, limit) {
        var _this = this;
        this.keywordSearch = false;
        this.bookService.getBooksByOffset(skip, limit)
            .subscribe(function (data) {
            _this.bookData = _this.addAlreadyRequestedFlag(data);
            _this.pBarService.hideProgressBar();
        }, function (err) {
            _this.notify.error('Error', 'Unable to fetch data.');
            _this.pBarService.hideProgressBar();
        });
    };
    BrowseBooksComponent.prototype.searchBooks = function () {
        var _this = this;
        if (!this.titleQuery) {
            return;
        }
        this.keywordSearch = true;
        this.pBarService.showProgressBar();
        this.helpMessage = '';
        this.bookData = [];
        this.bookService
            .searchBooks(this.titleQuery)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.bookData = data;
            }
            else {
                _this.helpMessage = 'Nothing to see here...';
            }
            _this.pBarService.hideProgressBar();
        }, function (err) {
            _this.helpMessage = 'unable to fetch data';
            _this.pBarService.hideProgressBar();
        });
    };
    BrowseBooksComponent.prototype.requestBook = function () {
        var _this = this;
        this.modalProgressBar = true;
        var book = this.selectedBook;
        this.requestService
            .requestBook({ username: this.username }, book)
            .subscribe(function (res) {
            _this.notify.success(book.title, 'This book was requested.');
            _this.modalProgressBar = false;
            _this.bookData.forEach(function (item) {
                if (item._id === book._id) {
                    // add requested flag to book in array
                    item.requested = true;
                }
            });
        }, function (err) {
            _this.notify.error(book.title, 'Sorry, this book cannot be requested right now.');
            _this.modalProgressBar = false;
        });
        this.closeModal();
    };
    BrowseBooksComponent.prototype.addAlreadyRequestedFlag = function (bookData) {
        var _this = this;
        bookData.forEach(function (book) {
            book.requested = false;
            book.usersRequesting.forEach(function (username) {
                if (username === _this.username) {
                    book.requested = true;
                }
            });
        });
        return bookData;
    };
    // UI METHODS
    BrowseBooksComponent.prototype.openModal = function (book) {
        this.selectedBook = book;
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    BrowseBooksComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    BrowseBooksComponent.prototype.authenticate = function (path) {
        this.closeModal();
        this.router.navigate([path]);
    };
    // PAGING METHODS
    BrowseBooksComponent.prototype.getNext = function () {
        if (this.skip + this.limit < this.booksInCollection) {
            this.skip += this.limit;
            this.getBooksByOffset(this.skip, this.limit);
        }
    };
    BrowseBooksComponent.prototype.getPrevious = function () {
        if (this.skip >= this.limit) {
            this.skip -= this.limit;
            this.getBooksByOffset(this.skip, this.limit);
        }
    };
    return BrowseBooksComponent;
}());
BrowseBooksComponent = __decorate([
    core_1.Component({
        selector: 'btc-browse-books',
        template: __webpack_require__("../../../../../src/app/browse-books/browse-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/book-styles.scss"), __webpack_require__("../../../../../src/app/styles/form-styles.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof book_service_1.BookService !== "undefined" && book_service_1.BookService) === "function" && _b || Object, typeof (_c = typeof request_service_1.RequestService !== "undefined" && request_service_1.RequestService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _e || Object, typeof (_f = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _f || Object])
], BrowseBooksComponent);
exports.BrowseBooksComponent = BrowseBooksComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=browse-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"btc-profile-username\"><i class=\"material-icons left btc-profile-icon\">person</i>{{currentUser.username}}</h1>\r\n\r\n<!-- SECONDARY NAVBAR -->\r\n<nav class=\"nav-extended btc-page-navbar\">\r\n  <div class=\"nav-content\">\r\n    <ul class=\"tabs tabs-transparent\">\r\n      <li class=\"tab\"><a (click)=\"showContent('Collection')\" [ngClass]=\"linkClass.collection\">My Collection</a></li>\r\n      <li class=\"tab\"><a (click)=\"showContent('Requests')\" [ngClass]=\"linkClass.requests\">My Requests</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<!-- MY COLLECTION TABLE -->\r\n<section *ngIf=\"activeTab === 'Collection'\" class=\"responsive-table btc-table-wrapper\">\r\n  <table>\r\n    <thead>\r\n      <tr class=\"btc-table-row\">\r\n        <th></th>\r\n        <th class=\"btc-title-column\">Title</th>\r\n        <th>Author</th>\r\n        <th class=\"btc-centered\">Requests</th>\r\n        <th class=\"btc-remove-column\">Remove</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let book of myBooks\" class=\"btc-table-row\">\r\n        <td><img class=\"btc-table-image\" src=\"{{book.imageLinks.thumbnail}}\" ></td>\r\n        <td class=\"btc-title-column\">{{book.title}}</td>\r\n        <td>{{book.authors[0]}}</td>\r\n        <td class=\"btc-centered\">{{book.requestsReceived.length}}</td>\r\n        <td class=\"btc-centered\"><i (click)=\"deleteBook(book)\" class=\"material-icons btc-icon\">delete_forever</i></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"myBooks?.length === 0\" class=\"btc-instruction-panel btc-profile-instruction-panel\">\r\n    <p>You have no books in your collection. Why don't you go ahead and\r\n      <a [routerLink]=\"['/add']\" class=\"btc-panel-link\">add books</a> ?\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<!-- DELETE MODAL -->\r\n<section id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4 *ngIf=\"selectedBook\"></h4>\r\n    <p></p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a class=\"waves-effect waves-green btn-flat\" >Remove<i class=\"material-icons right\">delete_forever</i></a>\r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Cancel<i class=\"material-icons right\">cancel</i></a>\r\n  </div>\r\n</section>\r\n\r\n<!-- REQUESTS TABLE -->\r\n<section *ngIf=\"activeTab !== 'Collection'\" class=\"responsive-table btc-table-wrapper\">\r\n  <table>\r\n    <thead>\r\n      <tr class=\"btc-table-row\">\r\n        <th class=\"btc-title-column\">Title</th>\r\n        <th class=\"btc-centered\">Owner</th>\r\n        <th class=\"btc-centered\">Message</th>\r\n        <th class=\"btc-centered\">Cancel</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let request of myRequests\" class=\"btc-table-row\">\r\n        <!-- <td class=\"btc-image-column btc-centered\"></td> -->\r\n        <td class=\"btc-title-column\">{{request.bookTitle}}</td>\r\n        <td class=\"btc-owner-column btc-centered\">{{request.ownerName | uppercase}} </td>\r\n        <td class=\"btc-message-column btc-centered\"><i (click)=\"openMessageModal(request)\" class=\"material-icons btc-message-icon\">message</i></td>\r\n        <td class=\"btc-cancel-column btc-centered\"><i class=\"material-icons btc-icon\" (click)=\"cancelRequest(request)\">cancel</i></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div *ngIf=\"myRequests?.length === 0\" class=\"btc-instruction-panel btc-profile-instruction-panel\">\r\n    <p>Nothing to see here... Go to\r\n      <a [routerLink]=\"['/browse']\" class=\"btc-panel-link\">browse books</a> to search available titles.\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btc-profile-username {\n  font-weight: bold;\n  margin-top: 40px;\n  font-size: 2em;\n  margin-bottom: 0; }\n\n.btc-profile-icon {\n  font-size: 40px;\n  margin-right: 10px !important; }\n\n.btc-page-navbar {\n  margin: 30px 0 20px 0; }\n\n.btc-table-image {\n  height: 50px; }\n\n.btc-title-column {\n  max-width: 20%;\n  font-weight: bold;\n  font-size: 1.1em; }\n\n.btc-centered {\n  text-align: center; }\n\n.btc-icon:hover {\n  cursor: pointer; }\n\n.btc-message-icon {\n  cursor: no-drop; }\n\n.btc-profile-instruction-panel {\n  padding-top: 3px;\n  padding-bottom: 3px; }\n\n@media screen and (max-width: 400px) {\n  .btc-table-row > th:first-child,\n  .btc-table-row > td:first-child {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var angular2_notifications_1 = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/services/book.service.ts");
var request_service_1 = __webpack_require__("../../../../../src/app/services/request.service.ts");
var progress_bar_service_1 = __webpack_require__("../../../../../src/app/services/progress-bar.service.ts");
var ProfileComponent = (function () {
    function ProfileComponent(auth, pBarService, bookService, requestService, notify) {
        this.auth = auth;
        this.pBarService = pBarService;
        this.bookService = bookService;
        this.requestService = requestService;
        this.notify = notify;
        // UI properties
        this.modalActions = new core_1.EventEmitter();
        this.activeTab = 'Collection';
        this.linkClass = {
            collection: 'active',
            requests: ''
        };
    }
    Object.defineProperty(ProfileComponent.prototype, "currentUser", {
        get: function () {
            return this.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.ngOnInit = function () {
        this.getMyBooks();
        this.getMyRequests();
    };
    ProfileComponent.prototype.getMyBooks = function () {
        var _this = this;
        this.bookService.getMyBooks(this.currentUser._id)
            .subscribe(function (data) {
            _this.myBooks = data;
        }, function (err) {
            _this.message = 'user data currently unavailable';
        });
    };
    ProfileComponent.prototype.getMyRequests = function () {
        var _this = this;
        this.requestService
            .getMyRequests(this.currentUser._id)
            .subscribe(function (data) {
            _this.myRequests = data;
            console.log(_this.myRequests);
        }, function (err) {
            _this.message = 'user data currently unavailable';
        });
    };
    ProfileComponent.prototype.showContent = function (link) {
        this.activeTab = link;
        this.linkClass.collection = link === 'Collection' ? 'active' : '';
        this.linkClass.requests = link === 'Requests' ? 'active' : '';
    };
    ProfileComponent.prototype.deleteBook = function (book) {
        var _this = this;
        this.pBarService.showProgressBar();
        this.bookService
            .deleteBookById(book._id)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.pBarService.hideProgressBar();
                _this.ngOnInit();
                _this.notify.success(book.title, 'This book was removed from your collection');
            }
        });
    };
    ProfileComponent.prototype.cancelRequest = function (request) {
        var _this = this;
        console.log({ request: request });
        this.pBarService.showProgressBar();
        this.requestService
            .deleteRequestById(request._id)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.pBarService.hideProgressBar();
                _this.ngOnInit();
                _this.notify.success(request.ownerName, "Your request to " + request.ownerName + " was cancelled");
            }
        }, function (err) {
            _this.notify.error(request.ownerName, "Your request to " + request.ownerName + " could not be cancelled");
        });
    };
    // not in use
    ProfileComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    ProfileComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'btc-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/book-styles.scss"), __webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof progress_bar_service_1.ProgressBarService !== "undefined" && progress_bar_service_1.ProgressBarService) === "function" && _b || Object, typeof (_c = typeof book_service_1.BookService !== "undefined" && book_service_1.BookService) === "function" && _c || Object, typeof (_d = typeof request_service_1.RequestService !== "undefined" && request_service_1.RequestService) === "function" && _d || Object, typeof (_e = typeof angular2_notifications_1.NotificationsService !== "undefined" && angular2_notifications_1.NotificationsService) === "function" && _e || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var AuthService = (function () {
    function AuthService(http, helper) {
        this.http = http;
        this.helper = helper;
    }
    AuthService.prototype.checkUsername = function (username) {
        var url = "/api/auth/check/" + username;
        return this.http.get(url);
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        var url = "/api/auth/register";
        return this.http.post(url, user)
            .do(function (response) {
            var token = _this.helper.getAuthTokenFromHeader(response);
            window.localStorage.setItem('token', token);
        })
            .map(function (response) { return response.json(); })
            .do(function (json) { return _this.updateCurrentUser(json); })
            .toPromise();
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = "/api/auth/login";
        return this.http.post(url, user)
            .do(function (res) {
            var token = _this.helper.getAuthTokenFromHeader(res);
            window.localStorage.setItem('token', token);
        })
            .map(function (res) { return res.json(); })
            .do(function (authorizedUser) { return _this.updateCurrentUser(authorizedUser); })
            .toPromise();
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var options = this.helper.addAuthTokenToHeader();
        var url = "/api/auth/logout";
        return this.http.delete(url, options)
            .toPromise()
            .then(function () {
            _this.currentUser = undefined;
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('_id');
        })
            .catch(function (e) { return console.log(e); });
    };
    AuthService.prototype.updateCurrentUser = function (user) {
        var username = user.username, _id = user._id;
        this.currentUser = user;
        window.localStorage.setItem('username', username);
        window.localStorage.setItem('_id', _id);
    };
    AuthService.prototype.isValidated = function () {
        var token = window.localStorage.getItem('token');
        var username = window.localStorage.getItem('username');
        var _id = window.localStorage.getItem('_id');
        if (token && username) {
            this.currentUser = { username: username, _id: _id };
            return username;
        }
        return null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _b || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var BookService = (function () {
    function BookService(http, authService, helperService) {
        this.http = http;
        this.authService = authService;
        this.helperService = helperService;
    }
    BookService.prototype.getBookCount = function () {
        var url = '/api/book/getBookCount';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getAllBooks = function () {
        var url = '/api/book/getBooks';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getBooksByOffset = function (skip, limit) {
        var url = "/api/book/getBooksByOffset?skip=" + skip + "&limit=" + limit;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getMyBooks = function (id) {
        var url = "/api/book/getCurrentUsersBooks?id=" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.searchBooks = function (title, author) {
        var url = "/api/book/searchBooks/" + title;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.addBookToCollection = function (bookToAdd) {
        var user = this.authService.currentUser;
        var url = '/api/book/addBook';
        var body = { user: user, bookToAdd: bookToAdd };
        var options = this.helperService.addAuthTokenToHeader();
        return this.http.post(url, body, options);
    };
    BookService.prototype.deleteBookById = function (id) {
        var url = "/api/book/delete/" + id;
        return this.http.delete(url);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _c || Object])
], BookService);
exports.BookService = BookService;
var _a, _b, _c;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/google-books-api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Basic search: https://www.googleapis.com/books/v1/volumes?q=search+terms
 * https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey (containing 'keyes' in author field)
 * terms: inauthor: intitle: subject:
 * API Key not needed for basic search
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var GoogleBooksApiService = (function () {
    function GoogleBooksApiService(http) {
        this.http = http;
    }
    GoogleBooksApiService.prototype.searchBooks = function (_a) {
        var titleQuery = _a.titleQuery, authorQuery = _a.authorQuery;
        var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
        var encodedTitle = encodeURI(titleQuery);
        var url = "" + baseUrl + encodedTitle;
        if (authorQuery) {
            var encodedAuthor = encodeURI(authorQuery);
            url = url.concat("+inauthor:" + encodedAuthor);
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (data) {
            if (!data.totalItems) {
                return Promise.reject('no data');
            }
            var filteredArray = [];
            data.items.forEach(function (item) {
                if (item.volumeInfo.language === 'en' && item.volumeInfo.title && item.volumeInfo.authors
                    && item.volumeInfo.imageLinks.smallThumbnail) {
                    var _a = item.volumeInfo, title = _a.title, subtitle = _a.subtitle, authors = _a.authors, publisher = _a.publisher, publishedDate = _a.publishedDate, pageCount = _a.pageCount, imageLinks = _a.imageLinks, description = _a.description;
                    filteredArray.push({ title: title, subtitle: subtitle, authors: authors, publisher: publisher, publishedDate: publishedDate, pageCount: pageCount, imageLinks: imageLinks, description: description });
                }
            });
            if (filteredArray.length === 0) {
                return Promise.reject('no data');
            }
            return filteredArray;
        })
            .catch(function (e) {
            console.log(e);
            return Promise.reject(e);
        });
    };
    return GoogleBooksApiService;
}());
GoogleBooksApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], GoogleBooksApiService);
exports.GoogleBooksApiService = GoogleBooksApiService;
var _a;
//# sourceMappingURL=google-books-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/helper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.getAuthTokenFromHeader = function (response) {
        var headers = response.headers.toJSON();
        if (headers['X-Auth']) {
            return headers['X-Auth'][0];
        }
        return headers['x-auth'][0];
    };
    HelperService.prototype.addAuthTokenToHeader = function () {
        var token = window.localStorage.getItem('token');
        var headers = new http_1.Headers({ 'X-Auth': token, 'Content-Type': 'application/json', });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    return HelperService;
}());
HelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HelperService);
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/is-validated-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var IsValidatedGuard = (function () {
    function IsValidatedGuard(auth) {
        this.auth = auth;
    }
    IsValidatedGuard.prototype.canActivate = function () {
        if (this.auth.isValidated()) {
            return true;
        }
        return false;
    };
    return IsValidatedGuard;
}());
IsValidatedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], IsValidatedGuard);
exports.IsValidatedGuard = IsValidatedGuard;
var _a;
//# sourceMappingURL=is-validated-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/progress-bar.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ProgressBarService = (function () {
    function ProgressBarService() {
        this.status = false;
    }
    ProgressBarService.prototype.hideProgressBar = function () {
        this.status = false;
    };
    ProgressBarService.prototype.showProgressBar = function () {
        this.status = true;
    };
    return ProgressBarService;
}());
ProgressBarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProgressBarService);
exports.ProgressBarService = ProgressBarService;
//# sourceMappingURL=progress-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var RequestService = (function () {
    function RequestService(helper, auth, http) {
        this.helper = helper;
        this.auth = auth;
        this.http = http;
    }
    RequestService.prototype.requestBook = function (user, book) {
        var requesterId = this.auth.currentUser._id;
        var timestamp = new Date().toString();
        var request = {
            requesterId: requesterId,
            requesterName: user.username,
            ownerId: book.userId,
            ownerName: book.username,
            bookId: book._id,
            bookTitle: book.title,
            dateRequested: timestamp,
            status: 'new'
        };
        var url = '/api/request/createRequest';
        var body = { request: request };
        var options = this.helper.addAuthTokenToHeader();
        return this.http.post(url, body, options);
    };
    RequestService.prototype.getMyRequests = function (id) {
        var url = "/api/request/getCurrentUsersRequests?id=" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.deleteRequestById = function (id) {
        var url = "api/request/delete/" + id;
        return this.http.delete(url);
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object])
], RequestService);
exports.RequestService = RequestService;
var _a, _b, _c;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/styles/auth-styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btc-form-wrapper {\n  border: 2px solid #5d4037;\n  padding: 0;\n  margin: 0 auto;\n  margin-top: 50px;\n  max-width: 320px; }\n\n.btc-form-header {\n  height: 92px;\n  background-color: #5d4037; }\n\n.btc-form-heading {\n  color: white;\n  text-align: center;\n  padding: 30px 0 30px 0;\n  margin: 0;\n  font-size: 2em; }\n\n.btc-input-wrapper {\n  padding-top: 20px;\n  width: 80%;\n  margin: 0 auto; }\n\n.btc-check-icon {\n  color: #37395d;\n  font-size: 30px; }\n\n.btc-form-button-wrapper {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 30px; }\n\n.btc-btn {\n  width: 100%;\n  background-color: #37395d; }\n\n.btc-error {\n  width: 80%;\n  color: #BA3525;\n  font-weight: bold;\n  padding: 5px;\n  margin: 0 auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/styles/book-styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btc-instruction-panel {\n  background-color: #eee;\n  padding: 15px 40px 15px 40px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 5px;\n  line-height: 1.8em;\n  letter-spacing: 1px; }\n\n.btc-panel-link {\n  font-weight: bold; }\n\n.btc-btn {\n  background-color: #37395d; }\n\n.btc-get-all-btn {\n  margin-left: 5px; }\n\n.btc-books-count {\n  font-size: 1em;\n  font-style: italic;\n  padding: 10px 10px;\n  color: #333;\n  float: right; }\n\n.btc-book-preview {\n  height: 360px; }\n\n.btc-book-preview-image-container {\n  background: #555;\n  height: 240px;\n  overflow: hidden;\n  position: relative; }\n\n.btc-book-preview-image-container:hover {\n    cursor: pointer; }\n\n.btc-book-preview-image {\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.btc-book-preview-image:hover {\n    opacity: 0.4; }\n\n.btc-book-preview-title {\n  font-weight: bold;\n  margin-bottom: 0; }\n\n.btc-book-preview-author {\n  margin: 3px 0 0 0;\n  font-size: 0.9em;\n  color: #444; }\n\n.btc-modal-progress-bar {\n  margin-top: 0; }\n\n.btc-modal-text {\n  float: left;\n  max-width: 60%; }\n\n.btc-modal-img-wrapper {\n  float: left;\n  margin-right: 20px; }\n\n.btc-modal-chip {\n  display: block;\n  margin-top: 10px;\n  background-color: #37395d;\n  text-align: center;\n  color: white; }\n\n.btc-modal-footer {\n  clear: both; }\n\n.btc-modal-title {\n  font-weight: bold;\n  font-size: 2.5em; }\n\n.btc-modal-subtitle {\n  font-weight: bold;\n  font-size: 1.2em; }\n\n.btc-modal-author {\n  font-size: 1.1em; }\n\n.btc-modal-pageCount {\n  font-style: italic;\n  font-size: 0.9em;\n  color: #444; }\n\n.modal-link:hover {\n  cursor: pointer; }\n\n.btc-paging-section {\n  margin: 0 auto;\n  margin-bottom: 50px;\n  padding: 5px;\n  text-align: center; }\n\n@media screen and (max-width: 600px) {\n  h1.btc-modal-title {\n    font-size: 1.8em;\n    margin: 4px 0; }\n  .btc-modal-content {\n    padding: 16px; }\n  .btc-modal-img-wrapper {\n    float: none; }\n  .btc-modal-text {\n    max-width: 100%; }\n  .btc-modal-img-wrapper img {\n    display: none; } }\n\n@media screen and (max-width: 400px) {\n  button.btc-btn {\n    display: block;\n    width: 80%;\n    margin: 10px auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/styles/form-styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* label color */\n.input-field label {\n  color: #1f1f1f; }\n/* label focus color */\n.input-field input[type=text]:focus + label,\n.input-field input[type=password]:focus + label {\n  color: #1f1f1f; }\n/* label underline focus color */\n.input-field input[type=text]:focus,\n.input-field input[type=password]:focus {\n  border-bottom: 1px solid #1f1f1f;\n  -webkit-box-shadow: 0 1px 0 0 #1f1f1f;\n          box-shadow: 0 1px 0 0 #1f1f1f; }\n.input-field .prefix.active {\n  color: #5d4037; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map