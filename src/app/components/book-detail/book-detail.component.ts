import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { AlertifyService } from '../../services/alertify.service';
import { ApiBookService } from '../../services/api-book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [ApiBookService,AlertifyService,ErrorHandlerService],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {
  book = {};

  constructor(private handler: ErrorHandlerService, private bookservice: ApiBookService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookservice.getBook(id)
      .subscribe(book => {
        this.book = book;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  deleteBook(id) {
    this.alertify.confirm(
      'Delete book', 'Are you sure to delete it?',
      () => {
        this.bookservice.deleteBook(id)
        .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          this.handler.handleError(err);
          console.log(err);
        });
      });
  }

}
