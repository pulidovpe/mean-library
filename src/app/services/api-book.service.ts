import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiBookService {

  domain: string = '/api/book';

  constructor(private http: HttpClient) { }

  getBook(id: string) {
     return this.http.get(`${this.domain}/${id}`, httpOptions)
       .map(res => res);
  }

  getBooks() {
     return this.http.get(`${this.domain}`, httpOptions)
       .map(res => res);
  }

  saveBook(newBook) {
     return this.http.post(`${this.domain}`, newBook, httpOptions)
        .map(res => res);
  }

  updateBook(_id, title, author, language, editorial, state) {
     const updBook = {
        _id, title, author, language, editorial, state
     };
     return this.http.put(`${this.domain}/${_id}`, updBook, httpOptions)
        .map(res => res);
  }

  deleteBook(id: string) {
     return this.http.delete(`${this.domain}/${id}`, httpOptions)
        .map(res => res);
  }

}
