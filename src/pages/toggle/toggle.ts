import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toggle',
  templateUrl: 'toggle.html',
})
export class TogglePage {

  toggleValue:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TogglePage');
  }

}
