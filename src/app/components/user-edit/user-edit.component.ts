import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { AlertifyService } from '../../services/alertify.service';
import { ApiUserService } from '../../services/api-user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [ApiUserService,AlertifyService,ErrorHandlerService],
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
        { type: 'maxlength', message: 'Name cannot be more than 30 characters long' },
        { type: 'pattern', message: 'Your name must contain only letters' }
     ],
     'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
     ],
     'address': [
        { type: 'required', message: 'Address is required' }
     ]
  }

  constructor(private handler: ErrorHandlerService, private userservice: ApiUserService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private alertify: AlertifyService) {
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
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z \t]{6,30}$/)
        ])],
        email: [null, Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]{2,64}@(?:[a-zA-Z0-9.-]{2,63}\.)[a-zA-Z]{2,6}$/)
        ])],
        address: [null, Validators.compose([
          Validators.required
        ])]
     });
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.userservice.getUser(id)
      .subscribe(data => {
        this.user = data;
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  updateUser(_id, nid, name, email, address) {
    this.userservice.updateUser(_id, nid, name, email, address)
      .subscribe(res => {
        let id = res['nid'];
        this.router.navigate(['/user-details', id]);
        this.alertify.success('User updated');
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }
}
