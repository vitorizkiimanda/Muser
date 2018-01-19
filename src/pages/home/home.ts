import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { VideoPage } from '../video/video';


import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  video:any;

  images:any;
  slide1:any;
  slide2:any;
  slide3:any;

  constructor(
    public navCtrl: NavController,
    public data: Data,
    public authHttp: AuthHttp,
    private nativePageTransitions: NativePageTransitions,
    private screenOrientation: ScreenOrientation,
    public http: Http) {

      if(this.screenOrientation.type=='landscape'){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }

      this.screenOrientation.onChange().subscribe(
        () => {
            console.log("Orientation Changed");

            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
      );

      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      

      this.getVideo();
      this.getWallpaper();
  }

  

  getVideo() {
    this.authHttp.get(this.data.BASE_URL+"/getvloggers").subscribe(data => {
      let response = data.json();
      console.log(response.vloggers);
      if(response.status==true){

        this.video=response.vloggers;
      }
      else{
        //alert gagal fetch data
        console.log("error");
      }
    });
  }

  getWallpaper() {
    this.authHttp.get(this.data.BASE_URL+"/getreviews").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==true){

        this.images=response.reviews;    
        this.slide1 = this.images[0].picture;
        this.slide2 = this.images[1].picture;
        this.slide3 = this.images[2].picture;

      }
      else{
        //alert gagal fetch data
        console.log("error");
      }
    });
  }

  gotoVideo(data){
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(VideoPage, data);
  }
}
