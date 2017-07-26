// package module(s)
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//ionic UI components
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { CounterInput } from '../components/counter-input/counter-input';


// pages
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { ListingPage } from '../pages/listing/listing';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';

//components
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';

//page services
import { ListingService } from '../pages/listing/listing.service';
import { ProductdetailService } from '../pages/productdetail/productdetail.service';
import { ProfileService } from '../pages/profile/profile.service';
import { NotificationsService } from '../pages/notifications/notifications.service';
import { ScheduleService } from "../pages/schedule/schedule.service";
import { List2Service } from '../pages/list-2/list-2.service';

//providers
import { LanguageService } from '../providers/language/language.service';

//add new
import { List2Page } from "../pages/list-2/list-2";
import { SettingsPage } from '../pages/settings/settings';
import { ContactCardPage } from '../pages/contact-card/contact-card';
import { ProductdetailPage } from '../pages/productdetail/productdetail';
import { FormValidationsPage } from '../pages/form-validations/form-validations';
import { SchedulePage } from '../pages/schedule/schedule';
import { PaymentPage } from '../pages/payment/payment';
import { Rating } from '../components/rating/rating';
import { FormValidationsServiceProvider } from '../pages/form-validations/form-validations.service';
import { ContactService } from '../pages/contact-card/contact-card.service';
import { AddressComponent } from '../components/address/address';




export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    LoginPage,
    SignupPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    TabsNavigationPage,
    ListingPage,
    NotificationsPage,
    ProfilePage,
    List2Page,
    SettingsPage,
    ContactCardPage,
    ProductdetailPage,
    Rating,
    FormValidationsPage,
    SchedulePage,
    PaymentPage,
    CounterInput,
    PreloadImage,
    BackgroundImage,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    LoginPage,
    SignupPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    TabsNavigationPage,
    ListingPage,
    NotificationsPage,
    ProfilePage,
    List2Page,
    SettingsPage,
    ContactCardPage,
    ProductdetailPage,
    Rating,
    FormValidationsPage,
    SchedulePage,
    PaymentPage
  ],
  providers: [
    ListingService,
    ProfileService,

    NotificationsService,
    ScheduleService,
    ContactService,
    List2Service,
    ProductdetailService,
    // FacebookLoginService,
    // GoogleLoginService,
    // TwitterLoginService,
    // GoogleMapsService,
    LanguageService,

    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,
    FormValidationsServiceProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
