import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChatPage } from '../pages/chat/chat';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { OnboardingPage } from '../pages/Onboarding/Onboarding';
import { SignupPage } from '../pages/signup/signup';
import { WallpaperPage } from '../pages/wallpaper/wallpaper';
import { ProfilPage } from '../pages/profil/profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChatPage,
    EventsPage,
    LoginPage,
    ProfilePage,
    OnboardingPage,
    SignupPage,
    ProfilPage,
    WallpaperPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChatPage,
    EventsPage,
    LoginPage,
    ProfilePage,
    OnboardingPage,
    SignupPage,
    ProfilPage,
    WallpaperPage
  ],
  providers: [
    StatusBar,
    
    NativePageTransitions,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
