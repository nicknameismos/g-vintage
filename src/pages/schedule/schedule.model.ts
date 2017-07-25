export class EventModel {
  name: string;
  detail: string;
  price: string;
  img: string;
}

export class ScheduleModel {
  today: Array<EventModel> = [];
  upcoming: Array<EventModel> = [];
}

export class EventDate {
  day: string;
  month: string;
  month_name: string;
  time: string;
  full: string;
}
