import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  url:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private screenOrientation: ScreenOrientation) {

    let video = this.navParams.data;

    this.url = video.url;

    console.log(video);

    this.screenOrientation.unlock();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  

}
