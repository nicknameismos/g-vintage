import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { UsernameValidator } from '../../components/validators/username.validator';
import { PasswordValidator } from '../../components/validators/password.validator';
import { PhoneValidator } from '../../components/validators/phone.validator';

import { Country } from './form-validations.model';
import { User } from './form-validations.model';
import { address } from './form-validations.model';
import { FormValidationsServiceProvider } from "./form-validations.service";
import { PaymentPage } from "../payment/payment";

import emailMask from 'text-mask-addons/dist/emailMask';

@Component({
  selector: 'form-validations-page',
  templateUrl: 'form-validations.html'
})

export class FormValidationsPage {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  emailMask = emailMask;

  countries: Array<Country>;
  genders: Array<string>;

  chk: string = 'true';
  user: any = {
    userprofile: {
      address: {}
    }
  };
  profile: User = new User();
  testing: string = 'address';

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public formValidationsServiceProvider: FormValidationsServiceProvider) {

    this.formValidationsServiceProvider.getUser()
      .then(data => {
        this.user = data;
        this.profile = new User();
        this.profile = data;
      });

  }

  ionViewWillLoad() {
    this.countries = [
      new Country('UY', 'Uruguay'),
      new Country('US', 'United States'),
      new Country('AR', 'Argentina')
    ];

    this.genders = [
      "Male",
      "Female"
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    let country = new FormControl(this.countries[0], Validators.required);
    let phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      address: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group,
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'postcode': [
      { type: 'required', message: 'Postcode is required.' }
    ],
    'province': [
      { type: 'required', message: 'Province is required.' }
    ],
    'district': [
      { type: 'required', message: 'District is required.' }
    ],
    'tel': [
      { type: 'required', message: 'Tel is required.' }
    ],
    'address': [
      { type: 'required', message: 'address is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(values) {
    console.log(values);
  }

  goToPayment() {
    this.navCtrl.push(PaymentPage);
  }

  gotoStep2(){
    this.testing = 'payment';
  }
}
