export class ListingModel {
  lastview: Array<ListingItemModel>;
  bestseller: Array<ListingItemModel>;
  shop: Array<ListingItemModel>;

  banner_title: string;
  banner_image: string;
  block_bg: string;


}


export class ListingItemModel {
  title: string;
  image: string;
  price: string;
  detail: string;
}
