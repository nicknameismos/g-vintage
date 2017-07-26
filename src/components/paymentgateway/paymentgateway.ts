import { Component } from '@angular/core';
import { Events } from "ionic-angular";
/**
 * Generated class for the PaymentgatewayComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'paymentgateway',
  templateUrl: 'paymentgateway.html'
})
export class PaymentgatewayComponent {

  text: string;

  constructor(public events: Events) {
    console.log('Hello PaymentgatewayComponent Component');
    this.text = 'Hello World';
  }
  gotoStep3() {
    this.events.publish('gotoStep3');
  }

}
