import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  books: any;
  stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  calculateStyles(state) {
    if(state === 'inactive') this.stateFlag = 'yellow';
    else this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
    return { 'background': this.stateFlag };
  }

}
