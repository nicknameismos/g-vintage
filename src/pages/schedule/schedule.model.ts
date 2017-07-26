export class EventModel {
  qty: number;
  total: number;
  items: Array<product>;
}
export class product {
  name: string;
  detail: string;
  price: number;
  img: string;
  qty: number;
  total: number;
  deliverytype: Array<deliverytype>;
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

export class deliverytype {
  desc: string;
}
