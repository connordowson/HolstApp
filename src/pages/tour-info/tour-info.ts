import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WalkingTourPage } from '../walking-tour/walking-tour';

@IonicPage()
@Component({
  selector: 'page-tour-info',
  templateUrl: 'tour-info.html'
})
export class TourInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  push(){
    this.navCtrl.push(WalkingTourPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourInfoPage');
  }

}
