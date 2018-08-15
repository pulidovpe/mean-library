import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiUserService,ErrorHandlerService],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  title = 'User List';
  users: any;
  page: number = 1;

  constructor(private handler: ErrorHandlerService, private userservice: ApiUserService) {
    this.userservice.getUsers()
      .subscribe(users => {
        this.users = users;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  ngOnInit() {
  }
}
