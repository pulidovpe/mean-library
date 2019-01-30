import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable()
export class AlertifyService {

  constructor() {
    alertify.defaults.transition = "slide";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    alertify.defaults.theme.input = "form-control";
  }

  confirm(title: string, message: string, okCallback: () => any) {
    alertify.confirm(title, message, function(evt) {
      if(evt) {
        okCallback();
        alertify.success('Deleted');
      } else {
        //do nothing
      }
    }, function() {
      alertify.warning('Canceled')
    })
    .set({labels:{ok:'Accept', cancel: 'Decline'}, 'closable': false});
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

}
