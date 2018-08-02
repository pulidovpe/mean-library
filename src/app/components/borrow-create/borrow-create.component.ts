import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow-create',
  templateUrl: './borrow-create.component.html',
  styleUrls: ['./borrow-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BorrowCreateComponent implements OnInit {
  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/api/book')
      .subscribe(data => {
        console.log(data);
        this.books = data;
      }, (err) => {
        console.log(err);
      }
    );
  }
  /*
  hacer un buscador para los libros, luego un formulario para el usuario
  */
  /*saveBook() {
    this.http.post('/api/borrow', this.books)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }*/

}
