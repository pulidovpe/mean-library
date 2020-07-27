import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { ApiBookService } from '../../services/api-book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [ApiBookService,ErrorHandlerService],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {

  books: any;
  stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
  title = 'Book List';
  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public config: any = {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next'
  };

  constructor(private handler: ErrorHandlerService, private bookservice: ApiBookService) { }

  ngOnInit() {
    this.bookservice.getBooks()
      .subscribe(books => {
        this.books = books;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  calculateStyles(state) {
    if(state === 'inactive') this.stateFlag = 'yellow';
    else this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
    return { 'background': this.stateFlag };
  }

  onPageChange(number: number) {
    console.log('change to page', number);
    this.config.currentPage = number;
  }

}
