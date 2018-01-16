import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-wallpaper',
  templateUrl: 'wallpaper.html',
})
export class WallpaperPage {

  choosenSource:any;
  images:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.images = [
      {
        img: "assets/pict/wallpaper1.png"
      },
      {
        img: "assets/pict/wallpaper2.png"
      },
      {
        img: "assets/pict/wallpaper3.png"
      },
      {
        img: "assets/pict/wallpaper1.png"
      },
      {
        img: "assets/pict/wallpaper2.png"
      },
      {
        img: "assets/pict/wallpaper3.png"
      },
      {
        img: "assets/pict/wallpaper1.png"
      },
      {
        img: "assets/pict/wallpaper2.png"
      },
      {
        img: "assets/pict/wallpaper3.png"
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WallpaperPage');
    this.choosenSource = this.images[0].img;
  }

  update(data) {
    console.log(data);
    this.choosenSource = data.img;
  }

}
