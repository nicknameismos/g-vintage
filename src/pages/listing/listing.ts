import { ProductdetailPage } from '../productdetail/productdetail';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';


@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  listing: ListingModel = new ListingModel();
  loading: any;

  constructor(
    public nav: NavController,
    public listingService: ListingService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.listingService
      .getData()
      .then(data => {
        this.listing.banner_image = data.banner_image;
        this.listing.banner_title = data.banner_title;
        this.listing.lastview = data.lastview;
        this.listing.shop = data.shop;
        this.listing.bestseller = data.bestseller;
        this.loading.dismiss();
      });
  }


  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    // this.nav.push(FeedPage, { category: category });
  }
  goToPrdDetial() {
    this.nav.push(ProductdetailPage);
  }
  goToShop() {
    // this.nav.push();
    // goTo() {
    //   this.nav.push(Product);
  }
}
