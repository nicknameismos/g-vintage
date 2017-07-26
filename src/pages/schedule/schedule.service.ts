import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { EventModel } from './schedule.model';

@Injectable()
export class ScheduleService {
  constructor(public http: Http) { }

  getData(): Promise<EventModel> {
    return this.http.get('./assets/example_data/cart.json')
      .toPromise()
      .then(response => response.json() as EventModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
