import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { AlertifyService } from '../../services/alertify.service';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ApiUserService,AlertifyService,ErrorHandlerService],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  user = {};

  constructor(private handler: ErrorHandlerService, private userservice: ApiUserService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.userservice.getUser(id)
      .subscribe(user => {
        this.user = user;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  deleteUser(id) {
    this.alertify.confirm(
      'Delete user', 'Are you sure to delete it?',
      () => {
        this.userservice.deleteUser(id)
        .subscribe(res => {
          this.router.navigate(['/users']);
        }, (err) => {
          this.handler.handleError(err);
          console.log(err);
        });
      });
  }
}
