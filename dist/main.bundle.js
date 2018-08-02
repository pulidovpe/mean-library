webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n        <img width=\"27\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n        <a [routerLink]=\"['/']\" class=\"navbar-brand\" href=\"#\">Library</a>\n        <ul class=\"nav navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/users']\" class=\"nav-link\">Users</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/books']\" class=\"nav-link\">Books</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/borrows']\" class=\"nav-link\">Borrows</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/']\" class=\"nav-link\">Connect</a>\n            </li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"container-fluid align-items-start\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MEAN Library';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_book_book_component__ = __webpack_require__("./src/app/components/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_book_detail_book_detail_component__ = __webpack_require__("./src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_book_create_book_create_component__ = __webpack_require__("./src/app/components/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_book_edit_book_edit_component__ = __webpack_require__("./src/app/components/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__ = __webpack_require__("./src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_create_user_create_component__ = __webpack_require__("./src/app/components/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_detail_user_detail_component__ = __webpack_require__("./src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_edit_user_edit_component__ = __webpack_require__("./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_borrow_borrow_component__ = __webpack_require__("./src/app/components/borrow/borrow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_borrow_create_borrow_create_component__ = __webpack_require__("./src/app/components/borrow-create/borrow-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_borrow_detail_borrow_detail_component__ = __webpack_require__("./src/app/components/borrow-detail/borrow-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_borrow_edit_borrow_edit_component__ = __webpack_require__("./src/app/components/borrow-edit/borrow-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__string_filter_pipe__ = __webpack_require__("./src/app/string-filter-pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*import { AlertModule } from 'ngx-bootstrap';*/

















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_8__components_book_book_component__["a" /* BookComponent */],
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_book_detail_book_detail_component__["a" /* BookDetailComponent */],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: __WEBPACK_IMPORTED_MODULE_11__components_book_create_book_create_component__["a" /* BookCreateComponent */],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__components_book_edit_book_edit_component__["a" /* BookEditComponent */],
        data: { title: 'Edit Book' }
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__["a" /* UserComponent */],
        data: { title: 'User List' }
    },
    {
        path: 'user-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_16__components_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        data: { title: 'User Details' }
    },
    {
        path: 'user-create',
        component: __WEBPACK_IMPORTED_MODULE_15__components_user_create_user_create_component__["a" /* UserCreateComponent */],
        data: { title: 'Create User' }
    },
    {
        path: 'user-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__components_user_edit_user_edit_component__["a" /* UserEditComponent */],
        data: { title: 'Edit User' }
    },
    {
        path: 'borrows',
        component: __WEBPACK_IMPORTED_MODULE_18__components_borrow_borrow_component__["a" /* BorrowComponent */],
        data: { title: 'Borrow List' }
    },
    {
        path: 'borrow-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_20__components_borrow_detail_borrow_detail_component__["a" /* BorrowDetailComponent */],
        data: { title: 'Borrow Details' }
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_13__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_detail_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_edit_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_borrow_borrow_component__["a" /* BorrowComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_borrow_create_borrow_create_component__["a" /* BorrowCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_borrow_detail_borrow_detail_component__["a" /* BorrowDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_borrow_edit_borrow_edit_component__["a" /* BorrowEditComponent */],
                __WEBPACK_IMPORTED_MODULE_22__string_filter_pipe__["a" /* StringFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
                /*AlertModule.forRoot()*/
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/book-create/book-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/book-create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"col-md-8 justify-content-start\">\n    <h1 class=\"text-light\">Add New Book</h1>\n    <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Author</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Language</label>\n        <select placeholder=\"Select\" [(ngModel)]=\"book.language\" required name=\"language\">\n          <option value=\"?\" selected=\"selected\"></option>\n          <option *ngFor=\"let l of languages\" [value]=\"l.language\">{{l.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Editorial</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.editorial\" name=\"editorial\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">State</label>\n        <select placeholder=\"Select\" [(ngModel)]=\"book.state\" required name=\"state\">\n          <option value=\"?\" selected=\"selected\"></option>\n          <option *ngFor=\"let st of states\" [value]=\"st.state\">{{st.name}}</option>\n        </select>\n      </div>\n      <div class=\"justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Save</button>\n        <a [routerLink]=\"['/books']\" class=\"btn btn-warning\">CANCEL</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.book = {};
        this.languages = [
            { language: "english", name: "Inglés" },
            { language: "spanish", name: "Español" },
            { language: "french", name: "Francés" },
            { language: "italian", name: "Italiano" }
        ];
        this.states = [
            { state: "active", name: "Activo" },
            { state: "inactive", name: "Inactivo" }
        ];
        this.selectedValue = null;
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function () {
        var _this = this;
        this.http.post('/api/book', this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-create',
            template: __webpack_require__("./src/app/components/book-create/book-create.component.html"),
            styles: [__webpack_require__("./src/app/components/book-create/book-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-light text-center\">{{ book.title }}</h2>\n<hr />\n<div class=\"row justify-content-center\">\n    <div class=\"col-md-4 justify-content-start\">\n      <dl class=\"list\">\n        <dt>Author</dt>\n        <dd>{{ book.author }}</dd>\n        <dt>Language</dt>\n        <dd>{{ book.language }}</dd>\n        <dt>Editorial</dt>\n        <dd>{{ book.editorial }}</dd>\n        <dt>State</dt>\n        <dd>{{ book.state }}</dd>\n      </dl>\n    </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">EDIT</a>\n  <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">DELETE</button>\n  <a [routerLink]=\"['/books']\" class=\"btn btn-warning\">CANCEL</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.http.get('/api/book/' + id)
            .subscribe(function (data) {
            _this.book = data;
        }, function (err) { return console.log(err); });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        if (window.confirm("Are you sure to delete?")) {
            this.http.delete('/api/book/' + id)
                .subscribe(function (res) {
                _this.router.navigate(['/books']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("./src/app/components/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/book-detail/book-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/book-edit/book-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"col-md-8 justify-content-start\">\n    <h1 class=\"text-light\">Edit Book</h1>\n    <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\" role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Author</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Language</label>\n        <select placeholder=\"Select\" [(ngModel)]=\"book.language\" required name=\"language\">\n          <option [value]=\"book.language\" selected=\"selected\">{{book.language}}</option>\n          <option *ngFor=\"let l of languages\" [value]=\"l.language\">{{l.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Editorial</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.editorial\" name=\"editorial\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">State</label>\n        <select placeholder=\"Select\" [(ngModel)]=\"book.state\" required name=\"state\">\n          <option [value]=\"book.state\" selected=\"selected\">{{book.state}}</option>\n          <option *ngFor=\"let st of states\" [value]=\"st.state\">{{st.name}}</option>\n        </select>\n      </div>\n      <div class=\"justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Update</button>\n        <a [routerLink]=\"['/books']\" class=\"btn btn-warning\">CANCEL</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.book = {};
        this.languages = [
            { language: "english", name: "Inglés" },
            { language: "spanish", name: "Español" },
            { language: "french", name: "Francés" },
            { language: "italian", name: "Italiano" }
        ];
        this.states = [
            { state: "active", name: "Activo" },
            { state: "inactive", name: "Inactivo" }
        ];
        this.selectedValue = null;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.http.get('/api/book/' + id)
            .subscribe(function (data) {
            _this.book = data;
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent.prototype.updateBook = function (id) {
        var _this = this;
        this.http.put('/api/book/' + id, this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-edit',
            template: __webpack_require__("./src/app/components/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/book-edit/book-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 28rem !important\">\n  <h1 class=\"text-light\">Book List\n    <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\n      <span  class=\"btn font-weight-bold\" style=\"font-size: 2em\" aria-hidden=\"true\">+</span>\n    </a>\n  </h1>\n  <label class=\"offset-md-9\">Filter books\n    <input type=\"text\" class=\"input\" placeholder=\"Search...\" [(ngModel)]=\"filter\">\n  </label>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>State</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody class=\"m-auto\">\n      <tr *ngFor=\"let book of books | stringFilter: filter | paginate: config\">\n        <td>{{ book.title }}</td>\n        <td>{{ book.author }}</td>\n        <td [ngStyle]=\"calculateStyles(book.state)\">{{ book.state }}</td>\n        <td><a [routerLink]=\"['/book-details', book._id]\">Show Detail</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<pagination-controls\n  [id]=\"config.id\"\n  [maxSize]=\"maxSize\"\n  [directionLinks]=\"directionLinks\"\n  [autoHide]=\"autoHide\"\n  [previousLabel]=\"labels.previousLabel\"\n  [nextLabel]=\"labels.nextLabel\"\n  (pageChange)=\"onPageChange($event)\">\n</pagination-controls>\n"

/***/ }),

/***/ "./src/app/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = /** @class */ (function () {
    function BookComponent(http) {
        this.http = http;
        this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
        this.filter = '';
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 5,
            currentPage: 1
        };
        this.labels = {
            previousLabel: 'Previous',
            nextLabel: 'Next'
        };
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/book')
            .subscribe(function (data) {
            console.log(data);
            _this.books = data;
        }, function (err) { return console.log(err); });
    };
    BookComponent.prototype.calculateStyles = function (state) {
        if (state === 'inactive')
            this.stateFlag = 'yellow';
        else
            this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
        return { 'background': this.stateFlag };
    };
    BookComponent.prototype.onPageChange = function (number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/components/book/book.component.html"),
            styles: [__webpack_require__("./src/app/components/book/book.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/components/borrow-create/borrow-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/borrow-create/borrow-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  borrow-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/borrow-create/borrow-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BorrowCreateComponent = /** @class */ (function () {
    function BorrowCreateComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    BorrowCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/book')
            .subscribe(function (data) {
            console.log(data);
            _this.books = data;
        }, function (err) {
            console.log(err);
        });
    };
    BorrowCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-borrow-create',
            template: __webpack_require__("./src/app/components/borrow-create/borrow-create.component.html"),
            styles: [__webpack_require__("./src/app/components/borrow-create/borrow-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BorrowCreateComponent);
    return BorrowCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/borrow-detail/borrow-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/borrow-detail/borrow-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-light text-center\">{{ borrow.book_id.title }}</h1>\n<!-- <p>\n  ID {{ borrow._id }} - Book ID {{ borrow.book_id._id}}\n</p> -->\n<hr />\n<div class=\"row justify-content-center\">\n    <div class=\"col-md-4 justify-content-start\">\n      <dl class=\"list\">\n        <dt class=\"align-content-center bg-dark\">Book</dt>\n        <dt>Author</dt>\n        <dd>{{ borrow.book_id.author }}</dd>\n        <dt>Language</dt>\n        <dd>{{ borrow.book_id.language }}</dd>\n        <dt>Editorial</dt>\n        <dd>{{ borrow.book_id.editorial }}</dd>\n      </dl>\n    </div>\n    <div class=\"col-md-4 justify-content-start\">\n      <dl class=\"list\">\n        <dt class=\"align-content-center bg-dark\">User</dt>\n        <dt>NID</dt>\n        <dd>{{ borrow.user_id.nid }}</dd>\n        <dt>Name</dt>\n        <dd>{{ borrow.user_id.name }}</dd>\n      </dl>\n    </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <button class=\"btn btn-success\" type=\"button\" (click)=\"returnBorrow(borrow._id, borrow.book_id._id)\">RETURN</button>\n  <a [routerLink]=\"['/borrows']\" class=\"btn btn-warning\">CANCEL</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/borrow-detail/borrow-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BorrowDetailComponent = /** @class */ (function () {
    function BorrowDetailComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.borrow = {};
    }
    BorrowDetailComponent.prototype.ngOnInit = function () {
        this.getBorrowDetail(this.route.snapshot.params['id']);
    };
    BorrowDetailComponent.prototype.getBorrowDetail = function (id) {
        var _this = this;
        this.http.get('/api/borrow/' + id)
            .subscribe(function (data) {
            _this.borrow = data;
        }, function (err) {
            console.log(err);
        });
    };
    BorrowDetailComponent.prototype.returnBorrow = function (id1, id2) {
        var _this = this;
        if (window.confirm("The book has been returned?")) {
            this.http.put('/api/borrow/' + id1 + '/' + id2, this.borrow)
                .subscribe(function (res) {
                _this.router.navigate(['/borrows']);
                alert("Already done!");
            }, function (err) {
                console.log(err);
            });
        }
    };
    BorrowDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-borrow-detail',
            template: __webpack_require__("./src/app/components/borrow-detail/borrow-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/borrow-detail/borrow-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BorrowDetailComponent);
    return BorrowDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/borrow-edit/borrow-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/borrow-edit/borrow-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  borrow-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/borrow-edit/borrow-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BorrowEditComponent = /** @class */ (function () {
    function BorrowEditComponent() {
    }
    BorrowEditComponent.prototype.ngOnInit = function () {
    };
    BorrowEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-borrow-edit',
            template: __webpack_require__("./src/app/components/borrow-edit/borrow-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/borrow-edit/borrow-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BorrowEditComponent);
    return BorrowEditComponent;
}());



/***/ }),

/***/ "./src/app/components/borrow/borrow.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/borrow/borrow.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 28rem !important\">\n  <h1 class=\"text-light\">Borrow List\n    <a [routerLink]=\"['/borrow-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"btn font-weight-bold\" style=\"font-size: 2em\" aria-hidden=\"true\">+</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>User</th>\n        <th>Book</th>\n        <th>Date Borrowed</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let borrow of borrows | paginate: { itemsPerPage: 5, currentPage: p }\">\n        <td>{{ borrow.user_id.name }}</td>\n        <td>{{ borrow.book_id.title }}</td>\n        <td [ngStyle]=\"calculateStyles(date_due(borrow.date_borrowed))\">{{ date_due(borrow.date_borrowed) }} Days Borrowed</td>\n        <td><a [routerLink]=\"['/borrow-details', borrow._id]\">Show Detail</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<pagination-controls\n  (pageChange)=\"p = $event\">\n</pagination-controls>\n"

/***/ }),

/***/ "./src/app/components/borrow/borrow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BorrowComponent = /** @class */ (function () {
    function BorrowComponent(http) {
        this.http = http;
        this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
        this.page = 1;
    }
    BorrowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/borrow')
            .subscribe(function (data) {
            _this.borrows = data;
        }, function (err) {
            console.log(err);
        });
    };
    BorrowComponent.prototype.date_due = function (day) {
        var str_day = day.toString();
        var start_day = new Date(str_day).getTime();
        var end_day = new Date().getTime();
        var diff = end_day - start_day;
        diff = Math.round(diff / (1000 * 60 * 60 * 24));
        return diff;
    };
    BorrowComponent.prototype.calculateStyles = function (days) {
        if (parseInt(days) > 3)
            this.stateFlag = 'red';
        else
            this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
        return { 'background': this.stateFlag };
    };
    BorrowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-borrow',
            template: __webpack_require__("./src/app/components/borrow/borrow.component.html"),
            styles: [__webpack_require__("./src/app/components/borrow/borrow.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BorrowComponent);
    return BorrowComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\n.title {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n}\nh1 {\n  text-transform: uppercase;\n  margin: 0;\n  font-size: 3rem;\n  white-space: nowrap;\n}\np {\n  margin: 0;\n  font-size: 1.5rem;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section> -->\n  <div class=\"title\">\n    <h1 class=\"text-light\">\n      Welcome to Library!\n    </h1>\n    <p>Just click for more!</p>\n  </div>\n<!-- </section> -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <span style=\"font-size: 8em\"><b>404</b></span><br />\n  <span style=\"font-size: 3em\">Ups! The route <code>{{path}}</code> does not exists.</span>\n\n  <p>\n    Puede ir a <a href=\"\" ng-click=\"back()\">back</a>\n    o <a [routerLink]=\"['/']\">Inicio</a> en su lugar.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/user-create/user-create.component.css":
/***/ (function(module, exports) {

module.exports = "textarea { resize: none; }\n"

/***/ }),

/***/ "./src/app/components/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"col-md-8 justify-content-start\">\n    <h1 class=\"text-light\">Add New User</h1>\n    <form (ngSubmit)=\"saveUser()\" #userForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">NID</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.nid\" name=\"nid\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">E-mail</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Address</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"user.address\" name=\"address\" required></textarea>\n      </div>\n      <div class=\"justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid\">Save</button>\n        <a [routerLink]=\"['/users']\" class=\"btn btn-warning\">CANCEL</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.user = {};
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.saveUser = function () {
        var _this = this;
        this.http.post('/api/user', this.user)
            .subscribe(function (res) {
            var id = res['nid'];
            _this.router.navigate(['/user-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    UserCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-create',
            template: __webpack_require__("./src/app/components/user-create/user-create.component.html"),
            styles: [__webpack_require__("./src/app/components/user-create/user-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-light text-center\">{{ user.name }}</h2>\n<hr />\n<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 justify-content-start\">\n    <dl class=\"list\">\n      <dt>NID</dt>\n      <dd>{{ user.nid }}</dd>\n      <dt>Name</dt>\n      <dd>{{ user.name }}</dd>\n      <dt>E-mail</dt>\n      <dd>{{ user.email }}</dd>\n      <dt>Address</dt>\n      <dd>{{ user.address }}</dd>\n    </dl>\n  </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <a [routerLink]=\"['/user-edit', user.nid]\" class=\"btn btn-success\">EDIT</a>\n  <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteUser(user._id)\">DELETE</button>\n  <a [routerLink]=\"['/users']\" class=\"btn btn-warning\">CANCEL</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.user = {};
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.getUserDetail(this.route.snapshot.params['id']);
    };
    UserDetailComponent.prototype.getUserDetail = function (id) {
        var _this = this;
        this.http.get('/api/user/' + id)
            .subscribe(function (data) {
            _this.user = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserDetailComponent.prototype.deleteUser = function (id) {
        var _this = this;
        if (window.confirm("Are you sure to delete?")) {
            this.http.delete('/api/user/' + id)
                .subscribe(function (res) {
                _this.router.navigate(['/users']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-detail',
            template: __webpack_require__("./src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/user-detail/user-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.css":
/***/ (function(module, exports) {

module.exports = "textarea { resize: none; }\n"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n  <div class=\"col-md-8 justify-content-start\">\n    <h1 class=\"text-light\">Edit User</h1>\n    <form (ngSubmit)=\"updateUser(user._id)\" #userForm=\"ngForm\" role=\"form\">\n      <div class=\"form-group\">\n        <label for=\"name\">NID</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.nid\" name=\"nid\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">E-mail</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Address</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"user.address\" name=\"address\" required></textarea>\n      </div>\n      <div class=\"justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid\">Update</button>\n        <a [routerLink]=\"['/users']\" class=\"btn btn-warning\">CANCEL</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = {};
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.getUser(this.route.snapshot.params['id']);
    };
    UserEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.http.get('/api/user/' + id)
            .subscribe(function (data) {
            _this.user = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserEditComponent.prototype.updateUser = function (id) {
        var _this = this;
        this.http.put('/api/user/' + id, this.user)
            .subscribe(function (res) {
            var id = res['nid'];
            _this.router.navigate(['/user-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-edit',
            template: __webpack_require__("./src/app/components/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/user-edit/user-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 28rem !important\">\n  <h1 class=\"text-light\">User List\n    <a [routerLink]=\"['/user-create']\" class=\"btn btn-default btn-lg\">\n      <span  class=\"btn font-weight-bold\" style=\"font-size: 2em\" aria-hidden=\"true\">+</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>NID</th>\n        <th>Name</th>\n        <th>E-mail</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users | paginate: { itemsPerPage: 5, currentPage: p }\">\n        <td>{{ user.nid }}</td>\n        <td>{{ user.name }}</td>\n        <td>{{ user.email }}</td>\n        <td><a [routerLink]=\"['/user-details', user.nid]\">Show Detail</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<pagination-controls\n  (pageChange)=\"p = $event\">\n</pagination-controls>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(http) {
        this.http = http;
        this.page = 1;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/user')
            .subscribe(function (data) {
            console.log(data);
            _this.users = data;
        }, function (err) {
            console.log(err);
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/components/user/user.component.html"),
            styles: [__webpack_require__("./src/app/components/user/user.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/string-filter-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * STRING-FILTER PIPE
 * Filtra un string
 */
var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (list, filterBy) {
        if (filterBy) {
            filterBy = filterBy.toLocaleLowerCase();
            return list.filter(function (item) {
                return Object.keys(item).some(function (prop) {
                    var value = item[prop];
                    if (typeof value === "string") {
                        value = value.toLocaleLowerCase();
                    }
                    return value.toString().indexOf(filterBy) !== -1;
                });
            });
        }
        else {
            return list;
        }
    };
    StringFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map