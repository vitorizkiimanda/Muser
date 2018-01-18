import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from "../providers/data";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OnboardingPage } from '../pages/Onboarding/Onboarding';
import { WallpaperPage } from '../pages/wallpaper/wallpaper';
import { EventsPage } from '../pages/events/events';
import { ChatPage } from '../pages/chat/chat';
import { ProfilPage } from '../pages/profil/profil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public data: Data) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Wallpaper', component: WallpaperPage },
      { title: 'Events', component: EventsPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Profil', component: ProfilPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.data.isLogin().then((value)=>{
      if(value){
        this.rootPage = HomePage;
      } else {
         this.rootPage = OnboardingPage;
      }    
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
