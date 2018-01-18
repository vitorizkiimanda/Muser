import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public data: Data) {
      this.data.getData().then((data) => {
        console.log(data);
      })

      this.data.getToken().then((data) => {
        console.log(data);
      })
  }

}
