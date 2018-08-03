import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-user-create',
   templateUrl: './user-create.component.html',
   styleUrls: ['./user-create.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class UserCreateComponent implements OnInit {

   user = {};

   constructor(private http: HttpClient, private router: Router) { }

   ngOnInit() {
      /*this.userForm = new FormGroup({
         'nid': new FormControl(this.userForm.nid, [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10)
         ]),
         'name': new FormControl(this.userForm.name, [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25)
         ]),
         'email': new FormControl(this.userForm.email, [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
         ]),
         'address': new FormControl(this.userForm.address, [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50)
         ])
      });*/
   }

   saveUser() {
      this.http.post('/api/user', this.user)
         .subscribe(res => {
           let id = res['nid'];
           this.router.navigate(['/user-details', id]);
         }, (err) => {
           console.log(err);
         }
      );
   }

}
