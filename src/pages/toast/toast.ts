import { Component } from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import { ToastController, ToastOptions } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  toastOptions: ToastOptions;
  message: string;

  constructor(private toast: ToastController) {
  }

  showToast(){
    this.toastOptions = {
      message: this.message,
      showCloseButton: true,
      closeButtonText: "CLOSE TOAST",
      position: "top"
    }
    this.toast.create(this.toastOptions).present();
  }

}
