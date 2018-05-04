import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {tourInfo} from './tourdata';
import { Geolocation } from '@ionic-native/geolocation';

import { HaversineService, GeoCoord } from "ng2-haversine";


@IonicPage()
@Component({
  selector: 'page-walking-tour',
  templateUrl: 'walking-tour.html',
})
export class WalkingTourPage {

  lat: number = 51.900872;
  lng: number = -2.079041;

  currentStop: number = 0;

  stopsArray = []


  directions = undefined;

  directionsOptions  = {
    preserveViewport: true
  };

  // destination = {
  //   latitude: 51.892226,
  //   longitude: -2.086077
  // }

  destinationLat: number = 51.892226;
  destinationLng: number = -2.086077;

  distanceToDest: number;

  zoomVal: number = 14;

  jsonData;



  protected map: any;

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private _haversineService: HaversineService
    ) {}

  ionViewWillEnter() {
  
      //var name = Object.keys(tourInfo)[0].;

      document.getElementById("test").innerText = tourInfo[0].name;
      var options = {
  
        enableHighAccuracy: true
  
      };


      let watch = this.geolocation.watchPosition(options);
 
  
      watch.subscribe((data) => {
  
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;

        this.distanceToDest = this._haversineService.getDistanceInMeters(data.coords, {latitude: this.destinationLat, longitude: this.destinationLng});

        if(this.distanceToDest < 15){

          //play music here

        }

        if(this.distanceToDest != null){

          document.getElementById("distance-h2").innerText = "You are " + Math.round(this.distanceToDest) + " meters away!";

        }

        if(this.jsonData != null){

          document.getElementById("info").innerText = this.jsonData.info; 

        }

        this.directions = {
          origin: {lat: this.lat, lng: this.lng},
          destination: {lat: this.destinationLat, lng: this.destinationLng},
          travelMode: 'WALKING'
        }

        
      });

      
  
  
    }

    protected mapReady(map){
      this.map = map;
    }

    centerMap(){

      this.map.setCenter({lat: this.lat, lng: this.lng});

    }

    zoomChangedBySlider(value: number){
      this.zoomVal = parseInt("" + value);
    }
  
    zoomChangedByMap(event){
      this.zoomVal = parseInt("" + event);
    }

    nextStop(){
      
      this.currentStop++;

      this.destinationLat = tourInfo[this.currentStop].lat;
      this.destinationLng = tourInfo[this.currentStop].lng;

      this.directions = {
        origin: {lat: this.lat, lng: this.lng},
        destination: {lat: this.destinationLat, lng: this.destinationLng},
        travelMode: 'WALKING'
      }

      document.getElementById("test").innerText = tourInfo[this.currentStop].name;

      this.updateDistance();




    }

    prevStop(){

      this.currentStop--;

      this.destinationLat = tourInfo[this.currentStop].lat;
      this.destinationLng = tourInfo[this.currentStop].lng;

      this.directions = {
        origin: {lat: this.lat, lng: this.lng},
        destination: {lat: this.destinationLat, lng: this.destinationLng},
        travelMode: 'WALKING'
      }

      document.getElementById("test").innerText = tourInfo[this.currentStop].name;

      this.updateDistance();

    }

    updateDistance(){

      this.distanceToDest = this._haversineService.getDistanceInMeters({latitude: this.lat, longitude: this.lng}, {latitude: this.destinationLat, longitude: this.destinationLng});

      document.getElementById("distance-h2").innerText = "You are " + Math.round(this.distanceToDest) + " meters away!";
    }
  
}
