export class UserModel {
  image: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  name: string;
  website: string;
}

export class UserprofileModel {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  img: string;
  address: Useraddress;
}
export class Useraddress {
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postcode: string;
}

export class ProfilePostModel {
  date: Date;
  image: string;
  description: string;
  likes: number = 0;
  comments: number = 0;
  liked: boolean = false;
}

export class ProfileModel {
  user: UserModel = new UserModel();
  userprofile: UserprofileModel = new UserprofileModel();
  following: Array<UserModel> = [];
  followers: Array<UserModel> = [];
  posts: Array<ProfilePostModel> = [];
}


