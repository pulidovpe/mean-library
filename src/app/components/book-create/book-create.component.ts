import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {
  book = {};
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
  selectedValue = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/api/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
