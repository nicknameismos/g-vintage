import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ContactModel } from './contact.model';

@Injectable()
export class ContactService {
  constructor(public http: Http) {}

  getData(): Promise<ContactModel> {
    return this.http.get('./assets/example_data/shop.json')
     .toPromise()
     .then(response => response.json() as ContactModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
