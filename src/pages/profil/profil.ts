import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { OnboardingPage } from '../Onboarding/Onboarding';


import { Data } from '../../providers/data';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  birthdate:string;
  domisili:string;
  email:string;
  gender:string;
  hp:string;
  img:string;
  name:string;
  status_kawin:string;

  role:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public data: Data) {

      this.data.getData().then((data) => {
        this.name=data.name;
        this.birthdate=data.birthdate;
        this.email=data.email;
        this.hp=data.hp;
        this.domisili=data.domisili;
        this.img=this.data.BASE_URL+data.img;
        this.gender=data.gender;
        this.status_kawin=data.status_kawin;
      })

      this.data.getRole().then((data) => {
        this.role=data;
        console.log(this.role);
      })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logOut(){
    this.data.logout();
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(OnboardingPage);
  }

  updatePicture(){
    alert("update pict");
  }

}
