import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';

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
    public http: Http) {
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
}
