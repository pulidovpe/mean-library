import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  users: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get('/api/user').subscribe(data => {
        console.log(data);
        this.users = data;
      });
    }

}
