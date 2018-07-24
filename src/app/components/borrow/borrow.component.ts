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
  stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/borrow').subscribe(data => {
      this.borrows = data;
    });
  }

  date_due(day) {
    let str_day = day.toString();
    let start_day = new Date(str_day).getTime();
    let end_day   = new Date().getTime();
    let diff = end_day - start_day;
    diff = Math.round( diff/(1000*60*60*24) );
    return diff;
  }

  calculateStyles(days) {
    if(parseInt(days) > 3) this.stateFlag = 'red';
    else this.stateFlag = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
    return { 'background': this.stateFlag };
  }

}
