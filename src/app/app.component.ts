import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { List2Page } from '../pages/list-2/list-2';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';

import {ProductdetailPage} from '../pages/productdetail/productdetail';


import { ContactCardPage } from '../pages/contact-card/contact-card';
import { ListingPage } from '../pages/listing/listing';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SchedulePage } from "../pages/schedule/schedule";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  rootPage: any = SchedulePage;

  textDir: string = "ltr";

  pages: Array<{ title: any, icon: string, component: any }>;
  pushPages: Array<{ title: any, icon: string, component: any }>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController
  ) {
    translate.setDefaultLang('en');
    translate.use('en');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
        platform.setDir('ltr', false);
      }
      else {
        platform.setDir('ltr', true);
        platform.setDir('rtl', false);
      }
      Observable.forkJoin(
        this.translate.get('HOME')
      ).subscribe(data => {
        this.pages = [
          { title: data[0], icon: 'home', component: TabsNavigationPage }
        ];

        // this.pushPages = [
        //   { title: data[3], icon: 'grid', component: LayoutsPage },
        //   { title: data[4], icon: 'settings', component: SettingsPage }
        // ];
      });
    });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}
