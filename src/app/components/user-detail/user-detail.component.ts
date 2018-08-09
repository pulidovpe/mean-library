import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ApiUserService],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  user = {};

  constructor(private userservice: ApiUserService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.userservice.getUser(id)
      .subscribe(user => {
        this.user = user;
      }, (err) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          alert(`An error occurred: ${err.error.message}`);
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          alert(`Backend returned code ${err.status}, body was: ${err.error}`);
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  deleteUser(id) {
    const response = confirm('are you sure to delete it?');
    if(response) {
      this.userservice.deleteUser(id)
      .subscribe(res => {
        this.router.navigate(['/users']);
      }, (err) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          alert(`An error occurred: ${err.error.message}`);
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          alert(`Backend returned code ${err.status}, body was: ${err.error}`);
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
    }
  }

}
