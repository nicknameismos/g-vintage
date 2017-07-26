export class ProductdetailModel {
	// productdetail: Array<productdetailitem>;
	productdetail: productdetailitem = new productdetailitem();
	productrelate: Array<productrelateItem>;


} export class productdetailitem {
	name: string;
	detail: string;
	price: string;
	img: string;
	deliverytype: string;
}
export class productrelateItem {
	name: string;
	detail: string;
	price: string;
	img: string;
	deliverytype: string;
}





