import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProductdetailModel } from './productdetail.model';

@Injectable()
export class ProductdetailService {
  constructor(public http: Http) {}

  getData(): Promise<ProductdetailModel> {
    return this.http.get('./assets/example_data/productdetail.json')
     .toPromise()
     .then(response => response.json() as ProductdetailModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}