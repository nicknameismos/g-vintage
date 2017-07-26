import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

import { ScheduleModel } from './schedule.model';
import { ScheduleService } from './schedule.service';
import { FormValidationsPage } from "../form-validations/form-validations";

@Component({
  selector: 'schedule-page',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  segment: string;
  schedule: ScheduleModel = new ScheduleModel();
  loading: any;
  numcal: number = 0;
  prodlist: any = { items: [] };

  constructor(
    public nav: NavController,
    public scheduleService: ScheduleService,
    public loadingCtrl: LoadingController
  ) {
    this.segment = "today";
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.scheduleService
      .getData()
      .then(data => {
        console.log(data);
        this.prodlist = data;
        this.schedule.today = data.today;
        this.schedule.upcoming = data.upcoming;
        this.loading.dismiss();
      });
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }
  gotoFormValidationsPage() {
    this.nav.push(FormValidationsPage);
  }
  removeNum(item) {

    item.qty -= 1;
  }
  addNum(item) {
    if (!item.qty) {
      item.qty = 1;
    } else {
      item.qty += 1;
    }

  }
}
