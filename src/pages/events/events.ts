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

  token:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: Data,
    public authHttp: AuthHttp,
    public http: Http) {

      this.data.getToken().then((data) => {
        this.token = data;
        console.log(this.token);
      })

      this.getEvents();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getEvents() {
    this.authHttp.get(this.data.BASE_URL+"/getproduct").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==true){

        // this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

}
