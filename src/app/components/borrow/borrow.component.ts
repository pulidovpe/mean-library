import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BorrowComponent implements OnInit {
  borrows: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/borrow').subscribe(data => {
      this.borrows = data;
    });
  }

}
