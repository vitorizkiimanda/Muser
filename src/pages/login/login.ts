import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { OnboardingPage } from '../Onboarding/Onboarding';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

import { Http } from '@angular/http';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  status:string;
  lihat = true;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public http: Http,
    public data: Data
  ) {
  }

  ionViewDidLoad() {
    this.status = "password";
    console.log('ionViewDidLoad LoginPage');
  }

    masuk(form: NgForm) {
    
      this.submitted = true;
  
      let loading = this.loadCtrl.create({
          content: 'memuat..'
      });
  
      if(form.valid){
        
        loading.present();
  
        //apiLogin
        let input = {
          email: this.email, 
          password: this.password
        };
          this.http.post(this.data.BASE_URL+"/signin",input).subscribe(data => {
          let response = data.json();
          if(response.status==true){
            console.log(response);     
            this.data.token(response.token);   
            this.data.login(response.user,"user");//ke lokal
            this.Login();
            loading.dismiss();
          }
          else {
            loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Invalid User',      
                buttons: ['OK']
              });
              alert.present();
          }
        //apilogin        
  
      });
      }
      else{
  
        let alert = this.alertCtrl.create({
                  title: 'Gagal Masuk',
                  subTitle: 'Email atau Password salah',      
                  buttons: ['OK']
                });
                // this.vibration.vibrate(1000);
                alert.present();
  
      }
  
    }
  
    // masuk() {
    //   this.navCtrl.setRoot(TabsDonaturPage);
    // }
  
    showPassword(){
      this.status = "text";
      this.lihat = false;
      console.log(this.status);
    }
  
    hidePassword(){
      this.status = "password";
      this.lihat = true;
      console.log(this.status);
    }
  
    signUp() {
      this.nativePageTransitions.fade(null);
      this.navCtrl.setRoot(SignupPage);
    }  

    Login() {
      this.nativePageTransitions.fade(null);
      this.navCtrl.setRoot(HomePage);
    }


  

}
