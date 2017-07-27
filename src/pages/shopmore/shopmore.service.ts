import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ShopModel } from "./shopmore.model";

@Injectable()
export class ShopmoreService {
  constructor(public http: Http) {}

  getData(): Promise<ShopModel> {
    return this.http.get('./assets/example_data/shoplist.json')
     .toPromise()
     .then(response => response.json() as ShopModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
