import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: Data,
    public authHttp: AuthHttp,
    public http: Http) {

      this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getEvents() {
    this.authHttp.get(this.data.BASE_URL+"/getevents").subscribe(data => {
      let response = data.json();
      console.log(response.rundowns);
      if(response.status==true){

        this.events=response.rundowns;
        console.log(this.events);
      }
      else{
        //alert gagal fetch data
        console.log("error");
      }
    });
  }

}
