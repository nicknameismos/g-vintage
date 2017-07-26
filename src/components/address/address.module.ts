import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddressComponent } from './address';

@NgModule({
  declarations: [
    AddressComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddressComponent
  ]
})
export class AddressComponentModule {}
