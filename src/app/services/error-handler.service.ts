import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { AlertifyService } from './alertify.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

   constructor(private alertify: AlertifyService) { }

   handleError(err: any) {
      if (err.error instanceof Error || err.error instanceof ProgressEvent || err.error instanceof HttpErrorResponse) {

         this.alertify.error(`An error occurred: ${err.name} - App seems to be offline`);
         console.error('An error occurred:', err.message);

      } else {
         if (!navigator.onLine) {
            // Handle offline error
            this.alertify.error('No Internet Connection');
         }
         if(err.status == 400) this.alertify.error(`Error on Backend - code ${err.status} - message: Validation Error`);
         if(err.status == 409) this.alertify.error(`Error on Backend - code ${err.status} - The input data are Duplicated`);
          console.error(
          `Backend returned code ${err.status}, ` +
          `body was: ${err.error}`
          );
      }
      // return an observable with a user-facing error message
      return _throw('Something bad happened; please try again later.');
   }

}
