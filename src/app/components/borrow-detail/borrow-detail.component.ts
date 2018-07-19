import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BorrowDetailComponent implements OnInit {
  borrow = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBorrowDetail(this.route.snapshot.params['id']);
  }

  getBorrowDetail(id) {
    this.http.get('/api/borrow/'+id).subscribe(data => {
      this.borrow = data;
    });
  }

  /* standing by... */
  deleteBorrow(id) {
    if(window.confirm("Are you sure to delete?")) {
      this.http.delete('/api/borrow/'+id)
      .subscribe(res => {
          this.router.navigate(['/borrows']);
        }, (err) => {
          console.log(err);
        }
      );
    }
  }

}
