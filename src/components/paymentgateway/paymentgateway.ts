import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello PaymentgatewayComponent Component');
    this.text = 'Hello World';
  }

}
