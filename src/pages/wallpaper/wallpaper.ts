import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-wallpaper',
  templateUrl: 'wallpaper.html',
})
export class WallpaperPage {

  choosenName:any;
  choosenSource:any;
  images:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: Data,
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
    console.log('ionViewDidLoad WallpaperPage');
  }

  update(data) {
    console.log(data);
    this.choosenSource = data.picture;
    this.choosenName = data.name;
  }

  getWallpaper() {
    this.authHttp.get(this.data.BASE_URL+"/getreviews").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==true){

        this.images=response.reviews;    
        this.choosenSource = this.images[0].picture;
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
