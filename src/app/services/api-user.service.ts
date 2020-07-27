import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiUserService {

   domain: string = '/api/user';

   constructor(private http: HttpClient) { }

   getUser(id: string) {
      return this.http.get(`${this.domain}/${id}`, httpOptions)
        .map(res => res);
   }

   getUsers() {
      return this.http.get(`${this.domain}`, httpOptions)
        .map(res => res);
   }

   saveUser(newUser) {
      return this.http.post(`${this.domain}`, newUser, httpOptions)
         .map(res => res);
   }

   updateUser(_id, nid, name, email, address) {
      const updUser = {
         _id, nid, name, email, address
      };
      return this.http.put(`${this.domain}/${_id}`, updUser, httpOptions)
         .map(res => res);
   }

   deleteUser(id: string) {
      return this.http.delete(`${this.domain}/${id}`, httpOptions)
         .map(res => res);
   }
}
