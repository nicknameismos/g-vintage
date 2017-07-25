import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

// import { FacebookLoginService } from '../facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../google-login/google-login.service';
// import { TwitterLoginService } from '../twitter-login/twitter-login.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;


  constructor(
    public nav: NavController,
    // public facebookLoginService: FacebookLoginService,
    // public googleLoginService: GoogleLoginService,
    // public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  doLogin(){
    this.nav.setRoot(this.main_page.component);
  }

  

}
