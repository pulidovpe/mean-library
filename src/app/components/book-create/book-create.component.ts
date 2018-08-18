import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { AlertifyService } from '../../services/alertify.service';
import { ApiBookService } from '../../services/api-book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  providers: [ApiBookService,AlertifyService,ErrorHandlerService],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  main_title = 'Add New Book';
  bookForm: FormGroup;
  //book = {};
  languages = [
    { language: "english", name: "Inglés" },
    { language: "spanish", name: "Español" },
    { language: "french", name: "Francés" },
    { language: "italian", name: "Italiano" }
  ];
  states = [
    { state: "active", name: "Activo" },
    { state: "inactive", name: "Inactivo" }
  ];
  //selectedValue = null;
  book_validation_messages = {
     'title': [
        { type: 'required', message: 'Title is required' },
        { type: 'minlength', message: 'Title must be at least 3 characters long' },
        { type: 'maxlength', message: 'Title cannot be more than 50 characters long' }
     ],
     'author': [
        { type: 'required', message: 'The name is required' },
        { type: 'minlength', message: 'Name must be at least 2 characters long' },
        { type: 'maxlength', message: 'Name cannot be more than 30 characters long' },
        { type: 'pattern', message: 'Your name must contain only letters' }
     ],
     'language': [
        { type: 'required', message: 'Language is required' }
     ],
     'editorial': [
        { type: 'required', message: 'Editorial is required' },
        { type: 'minlength', message: 'Name must be at least 3 characters long' },
        { type: 'maxlength', message: 'Name cannot be more than 30 characters long' }
     ],
     'state': [
        { type: 'required', message: 'Address is required' }
     ]
  }

  constructor(private handler: ErrorHandlerService, private bookservice: ApiBookService, private fb: FormBuilder, private router: Router, private alertify: AlertifyService) {
    this.createForm();
  }

  createForm() {
   this.bookForm = this.fb.group({
      title: [null, Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(50),
      ])],
      author: [null, Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(30),
         Validators.pattern(/^[a-zA-Z \t]{6,30}$/)
      ])],
      language: [null, Validators.compose([
         Validators.required,
      ])],
      editorial: [null, Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(30)
      ])],
      state: [null, Validators.compose([
         Validators.required
      ])]
   });
  }

  saveBook(form:NgForm) {
    this.bookservice.saveBook(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
        this.alertify.success('Book created');
      }, (err) => {
        this.handler.handleError(err);
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
