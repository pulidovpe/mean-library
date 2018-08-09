import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*import { HttpClient } from '@angular/common/http';*/
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [ApiUserService],
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent implements OnInit {

  user: any = {};
  title = 'Edit a User';
  userForm: FormGroup;
  user_validation_messages = {
     'nid': [
        { type: 'required', message: 'NID is required' },
        { type: 'minlength', message: 'NID must be at least 6 characters long' },
        { type: 'maxlength', message: 'NID cannot be more than 10 characters long' },
        { type: 'pattern', message: 'Your NID must contain only numbers' }
     ],
     'name': [
        { type: 'required', message: 'The name is required' },
        { type: 'minlength', message: 'Name must be at least 6 characters long' },
        { type: 'maxlength', message: 'Name cannot be more than 30 characters long' }
     ],
     'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Enter a valid email' }
     ],
     'address': [
        { type: 'required', message: 'Address is required' }
     ]
  }

  constructor(private userservice: ApiUserService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
     this.userForm = this.fb.group({
        nid: [null, Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          Validators.pattern(/^[1-9]\d{6,10}$/)
        ])],
        name: [null, Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])],
        email: [null, Validators.compose([
          Validators.required,
          Validators.email
        ])],
        address: [null, Validators.compose([
          Validators.required
        ])]
     });
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }
  /*this.route.params.subscribe(params => {
    this.user = this.userservice.getUser(params['id']).subscribe(data => {
        this.user = data;
    });
  });*/
  getUser(id) {
    this.userservice.getUser(id)
      .subscribe(data => {
        this.user = data;
      }, (err) => {
        if(err.name == 'HttpErrorResponse')
          alert(`err: ${err.name} - App is offline`);
        else
          alert(`err: ${err.name}`);
      }
    );
  }

  updateUser(_id, nid, name, email, address) {
    this.userservice.updateUser(_id, nid, name, email, address);
  }

}
