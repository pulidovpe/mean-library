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
  borrow: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBorrowDetail(this.route.snapshot.params['id']);
  }

  getBorrowDetail(id) {
    this.http.get('/api/borrow/'+id)
      .subscribe(data => {
        this.borrow = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  returnBorrow(id1,id2) {
    if(window.confirm("The book has been returned?")) {
      this.http.put('/api/borrow/'+id1+'/'+id2, this.borrow)
      .subscribe(res => {
          this.router.navigate(['/borrows']);
          alert("Already done!");
        }, (err) => {
          console.log(err);
        }
      );
    }
  }

}
