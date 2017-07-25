import { Component } from '@angular/core';

import { ListingPage } from '../listing/listing';
import { ProfilePage } from '../profile/profile';
// import { NotificationsPage } from '../notifications/notifications';
import { SchedulePage } from "../schedule/schedule";

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = ListingPage;
    this.tab2Root = SchedulePage;
    this.tab3Root = ProfilePage;
  }
}
