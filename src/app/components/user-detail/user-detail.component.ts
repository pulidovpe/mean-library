import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  user = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.http.get('/api/user/'+id)
      .subscribe(data => {
        this.user = data;
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(id) {
    if(window.confirm("Are you sure to delete?")) {
      this.http.delete('/api/user/'+id)
      .subscribe(res => {
          this.router.navigate(['/users']);
        }, (err) => {
          console.log(err);
        }
      );
    }
  }

}
