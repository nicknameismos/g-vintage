import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello ReviewgatewayComponent Component');
    this.text = 'Hello World';
  }

}
