import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';


import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-wallpaper',
  templateUrl: 'wallpaper.html',
})
export class WallpaperPage {

  choosenName:any;
  choosenSource1:any;
  choosenSource2:any;
  choosenSource3:any;
  images:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: Data,
    private screenOrientation: ScreenOrientation,
    public authHttp: AuthHttp,
    public http: Http) {

      this.getWallpaper();

    // this.images = [
    //   {
    //     img: "assets/pict/wallpaper1.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper2.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper3.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper1.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper2.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper3.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper1.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper2.png"
    //   },
    //   {
    //     img: "assets/pict/wallpaper3.png"
    //   }
    // ];

  }

  ionViewDidLoad() {

    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    console.log('ionViewDidLoad WallpaperPage');
  }

  update(data) {
    console.log(data);
    this.choosenSource1 = data.picture;
    this.choosenSource2 = data.picture2;
    this.choosenSource3 = data.picture3;
    this.choosenName = data.name;
  }

  getWallpaper() {
    this.authHttp.get(this.data.BASE_URL+"/getreviews").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==true){

        this.images=response.reviews;    
        this.choosenSource1 = this.images[0].picture;
        this.choosenSource2 = this.images[0].picture2;
        this.choosenSource3 = this.images[0].picture3;
        this.choosenName = this.images[0].name;
        console.log(this.images);
      }
      else{
        //alert gagal fetch data
        console.log("error");
      }
    });
  }

}
