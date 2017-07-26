import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import 'rxjs/Rx';

import { ScheduleModel } from './schedule.model';
import { ScheduleService } from './schedule.service';
import { FormValidationsPage } from "../form-validations/form-validations";
import { EventModel } from "./schedule.model";
@Component({
  selector: 'schedule-page',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  segment: string;
  schedule: ScheduleModel = new ScheduleModel();
  loading: any;
  numcal: number = 0;
  prodlist: EventModel = new EventModel();
  counterForm: any;

  constructor(
    public nav: NavController,
    public scheduleService: ScheduleService,
    public loadingCtrl: LoadingController
  ) {
    this.segment = "today";
    this.loading = this.loadingCtrl.create();

    this.counterForm = new FormGroup({
      counter: new FormControl()
    });
  }

  ionViewDidLoad() {
    this.loading.present();
    this.scheduleService
      .getData()
      .then(data => {
        console.log(data);
        this.prodlist = data;
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
