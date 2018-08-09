import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable()
export class ApiUserService {

  domain: string = '/api/user';

  constructor(private http: HttpClient, private router: Router) { }

  getUser(id) {
    console.log(`${this.domain}/${id}`);
    return this.http.get(`${this.domain}/${id}`)
      .map(res => res);
  }

  getUsers() {
    return this.http.get(`${this.domain}`)
      .map(res => res);
  }

  saveUser(nid, name, email, address) {
    const newUser = {
      nid, name, email, address
    };
    this.http.post(`${this.domain}`, newUser)
      .subscribe(res => {
        let id = res['nid'];
        this.router.navigate(['/user-details', id]);
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
      }
    );
  }

  updateUser(_id, nid, name, email, address) {
    const updUser = {
      _id, nid, name, email, address
    };
    this.http.put(`${this.domain}/${_id}`, updUser)
      .subscribe(res => {
        let id = res['nid'];
        this.router.navigate(['/user-details', id]);
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
      }
    );
  }

  deleteUser(id) {
    return this.http.delete(`${this.domain}/${id}`)
      .map(res => res);
  }

}
