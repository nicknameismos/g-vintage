import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, Platform } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

import { WalkthroughPage } from '../walkthrough/walkthrough';

import 'rxjs/Rx';

import { ProfileModel } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from "../../providers/language/language.service";
import { LanguageModel } from "../../providers/language/language.model";
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';

@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settingsForm: FormGroup;
  // make WalkthroughPage the root (or first) page
  rootPage: any = WalkthroughPage;
  loading: any;
  address: any = {};

  profile: ProfileModel = new ProfileModel();
  languages: Array<LanguageModel>;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    public translate: TranslateService,
    public languageService: LanguageService,
    public profileService: ProfileService,
    public appRate: AppRate,
    public imagePicker: ImagePicker,
    public cropService: Crop,
    public platform: Platform
  ) {
    this.loading = this.loadingCtrl.create();

    this.languages = this.languageService.getLanguages();

    this.settingsForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      tel: new FormControl(),
      // description: new FormControl(),
      // currency: new FormControl(),
      // weather: new FormControl(),
      notifications: new FormControl(),
      language: new FormControl()
    });
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService.getData().then(data => {
      this.profile.user = data.user;
      this.profile.userprofile = data.userprofile;
      this.address = data.userprofile.address;


      // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
      // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
      // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
      this.settingsForm.patchValue({

        name: data.userprofile.firstname,
        lastname: data.userprofile.lastname,
        email: data.userprofile.email,
        address: this.address.address + ' ' + this.address.subdistrict + ' ' + this.address.district + ' ' + this.address.province + ' ' + this.address.postcode ,
        tel: data.userprofile.tel,
        // description: data.user.about,
        // currency: 'dollar',
        // weather: 'fahrenheit',
        notifications: true,
        language: this.languages[0]
      });

      this.loading.dismiss();

      this.settingsForm.get('language').valueChanges.subscribe((lang) => {
        this.setLanguage(lang);
      });
    });
  }

  logout() {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(this.rootPage);
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

  setLanguage(lang: LanguageModel) {
    let language_to_set = this.translate.getDefaultLang();

    if (lang) {
      language_to_set = lang.code;
    }

    this.translate.setDefaultLang(language_to_set);
    this.translate.use(language_to_set);
  }

  rateApp() {
    this.appRate.preferences.storeAppURL = {
      ios: '<my_app_id>',
      android: 'market://details?id=<package_name>',
      windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
    };

    this.appRate.promptForRating(true);
  }

  openImagePicker() {
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if (result == false) {
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if (result == true) {
          this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], { quality: 75 }).then(
                  newImage => {
                    this.profileService.setUserImage(newImage);
                    this.profile.user.image = newImage;
                  },
                  error => console.error("Error cropping image", error)
                );
              }
            }, (err) => console.log(err)
          );
        }
      }
    )
  }
}
