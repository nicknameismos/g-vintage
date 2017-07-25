import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FormValidationsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FormValidationsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello FormValidationsServiceProvider Provider');
  }

}
