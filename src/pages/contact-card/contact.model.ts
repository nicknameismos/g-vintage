// export class ContactModel {
// 	populars: Array<ContactItemModel>;
// 	images: Array<string> = [];
// 	shopimg: string;
// 	name: string;
// 	rating: number;
// 	email: string;
// 	phone: string;
// 	website: string;
// 	address: string;

// 	constructor() {
// 		this.images = [
// 			'./assets/images/maps/place-1.jpg',
// 			'./assets/images/maps/place-2.jpg',
// 			'./assets/images/maps/place-3.jpg',
// 			'./assets/images/maps/place-4.jpg'
// 		];
// 		this.shopimg = "./assets/images/maps/place-1.jpg";
// 		this.name = "Railway Cafe";
// 		this.rating = 4;
// 		this.email = "contact@ionicthemes.com";
// 		this.phone = "555-555-555";
// 		this.website = "https://ionicthemes.com";
// 		this.address = "7644 sable st";
// 	}
// }


export class ContactDetailModel {
	product: Array<ContactItemModel>;
	name: string;
	detail: string;
	img: string;
	tel: string;
	email: string;
}
export class ContactItemModel {
	name: string;
	detail: string;
	price: string;
	img: string;
}
export class ContactModel {
	shop: ContactDetailModel = new ContactDetailModel();
}
