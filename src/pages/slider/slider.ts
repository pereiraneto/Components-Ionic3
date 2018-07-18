import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild(Slides) slides: Slides;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  slideChanged(){
    this.toast.create({
      message: 'Slide changed !'
    }).present();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.slides.slideTo(1, 1000);
    }, 1000);
  }

}
