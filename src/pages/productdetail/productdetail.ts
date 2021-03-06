import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SchedulePage } from "../schedule/schedule";
import { ProductdetailModel } from './productdetail.model';
import { ProductdetailService } from './productdetail.service';

@Component({
  selector: 'productdetail-page',
  templateUrl: 'productdetail.html'
})
export class ProductdetailPage {
  product: ProductdetailModel = new ProductdetailModel();

  constructor(
    public navCtrl: NavController,
    private emailComposer: EmailComposer,
    public inAppBrowser: InAppBrowser,
    public productdetailService: ProductdetailService
  ) {
    this.product.images = [
      "assets/images/products/p7.png",
      "assets/images/products/p8.png",
      "assets/images/products/p9.png",
      "assets/images/products/p10.png"
    ];

    this.productdetailService
      .getData()
      .then(data => {
        this.product.productdetail = data.productdetail;
        this.product.productrelate = data.productrelate;
        // this.product.images = data.images;
      });
  }
  goToSchedulePage() {
    this.navCtrl.push(SchedulePage);
  }
  //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
  // call(number: string){
  //   this.callNumber.callNumber(number, true)
  //   .then(() => console.log('Launched dialer!'))
  //   .catch(() => console.log('Error launching dialer'));
  // }

  sendMail() {
    //for more option please go here: http://ionicframework.com/docs/native/email-composer/
    let email = {
      to: 'contact@ionicthemes.com',
      subject: 'This app is the best!',
      body: "Hello, I'm trying this fantastic app that will save me hours of development"
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  openInAppBrowser(website: string) {
    this.inAppBrowser.create(website, '_blank', "location=yes");
  }

}
