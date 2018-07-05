import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
/*import { AlertModule } from 'ngx-bootstrap';*/

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    PageNotFoundComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    /*AlertModule.forRoot()*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
