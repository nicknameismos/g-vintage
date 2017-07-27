import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { ShopModel } from "./shopmore.model";
import { ShopmoreService } from "./shopmore.service";
import { ContactCardPage } from "../contact-card/contact-card";

@Component({
  selector: 'shopmore-page',
  templateUrl: 'shopmore.html'
})
export class ShopPage {
  shopeMore: ShopModel = new ShopModel();
  loading: any;

  constructor(
    public nav: NavController,
    public list2Service: ShopmoreService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.list2Service
      .getData()
      .then(data => {
        this.shopeMore.items = data.items;
        this.loading.dismiss();
      });
  }
  openShopDetail() {
    this.nav.push(ContactCardPage);
  }
  // openPageProductDetail() {
  //   this.nav.push(ProductdetailPage);
  // }

}
