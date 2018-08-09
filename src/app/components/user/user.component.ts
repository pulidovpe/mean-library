import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiUserService],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  title = 'User List';
  users: any;
  page: number = 1;

  constructor(private userservice: ApiUserService) {
    this.userservice.getUsers()
      .subscribe(users => {
        this.users = users;
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

  ngOnInit() {
  }

}
