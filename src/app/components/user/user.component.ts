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
  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public config: any = {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next'
  };

  constructor(private handler: ErrorHandlerService, private userservice: ApiUserService) {
  }

  ngOnInit() {
    this.userservice.getUsers()
      .subscribe(users => {
        this.users = users;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  onPageChange(number: number) {
    console.log('change to page', number);
    this.config.currentPage = number;
  }
}
