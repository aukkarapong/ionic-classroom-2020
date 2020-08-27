import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text01: string

  constructor(public navCtrl: NavController) {

  }
  ShowText(text01){
    //alert("Test Submit Form")
    alert(this.text01)
  }

}
