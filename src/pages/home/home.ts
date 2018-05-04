import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

//import { Geolocation } from '@ionic-native/geolocation';


//declare const google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // lat: number = 51.900872;
  // lng: number = -2.079041;

  // destLat: number = 51.888243;
  // destLng: number = -2.088681;

  // zoomVal: number = 17;
  // campusName = "Oxstalls";

  // constructor(
  //   public navCtrl: NavController,
  //   private geolocation: Geolocation
  //   ) {}

  // ionViewDidEnter(){
    
  // }

  // ionViewDidLoad(){ 

  //   var options = {

  //     enableHighAccuracy: true

  //   };

  //   let watch = this.geolocation.watchPosition(options);


  //   watch.subscribe((data) => {

  //     console.log(data.coords);
  //     this.lat = data.coords.latitude;
  //     this.lng = data.coords.longitude;
      
  //   });

  //   // this.geolocation.getCurrentPosition().then((resp) => {
  //   //   console.log(resp.coords);
  //   //   this.lat = resp.coords.latitude;
  //   //   this.lng = resp.coords.longitude;

  //   //  }).catch((error) => {
  //   //    console.log('Error getting location', error);
  //   //  });

  // }

  

  // zoomChangedBySlider(value: number){
  //   this.zoomVal = parseInt("" + value);
  // }

  // zoomChangedByMap(event){
  //   this.zoomVal = parseInt("" + event);
  // }

  // openCampusMap(){

  //   if(this.campusName == "Oxstalls"){

  //     this.zoomVal = 17;
  //     this.lat = 51.872176;
  //     this.lng = -2.223891;

  //   } else if (this.campusName == "Park"){

  //     this.zoomVal = 17;
  //     this.lat = 51.888243;
  //     this.lng = -2.088681;

  //   } else{

  //     alert("not a campus m8");
  //     this.zoomVal = 6;

  //   }

  // }

}
