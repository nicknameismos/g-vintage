import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from "./form-validations.model";

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

  getUser(): Promise<User> {
    return this.http.get('./assets/example_data/userprofile.json')
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
