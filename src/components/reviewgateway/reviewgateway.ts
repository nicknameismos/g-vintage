import { Component } from '@angular/core';
import { Events } from "ionic-angular";


/**
 * Generated class for the ReviewgatewayComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'reviewgateway',
  templateUrl: 'reviewgateway.html'
})
export class ReviewgatewayComponent {

  text: string;

  constructor(public events: Events) {
    console.log('Hello ReviewgatewayComponent Component');
    this.text = 'Hello World';
  }

  placeorder() {
    this.events.publish('placeorder');
  }

}
