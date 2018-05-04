webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walking_tour_walking_tour__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourInfoPage = /** @class */ (function () {
    function TourInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TourInfoPage.prototype.push = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__walking_tour_walking_tour__["a" /* WalkingTourPage */]);
    };
    TourInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TourInfoPage');
    };
    TourInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tour-info',template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\tour-info\tour-info.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Holst Life Tour</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n\n    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\n     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \n\n      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n  </p>\n\n\n\n  <div id ="tourbutton" text center>\n\n    <button ion-button (click)="push()" color="secondary" text-center>Start Tour</button>\n\n  </div>  \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\tour-info\tour-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TourInfoPage);
    return TourInfoPage;
}());

//# sourceMappingURL=tour-info.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkingTourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourdata__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_haversine__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_haversine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_haversine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalkingTourPage = /** @class */ (function () {
    function WalkingTourPage(navCtrl, geolocation, _haversineService) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this._haversineService = _haversineService;
        this.lat = 51.900872;
        this.lng = -2.079041;
        this.currentStop = 0;
        this.directions = undefined;
        this.directionsOptions = {
            preserveViewport: true
        };
        this.destinationLat = 51.892226;
        this.destinationLng = -2.086077;
        this.zoomVal = 14;
    }
    WalkingTourPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        document.getElementById("test").innerText = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][0].name;
        var options = {
            enableHighAccuracy: true
        };
        var watch = this.geolocation.watchPosition(options);
        watch.subscribe(function (data) {
            _this.lat = data.coords.latitude;
            _this.lng = data.coords.longitude;
            _this.distanceToDest = _this._haversineService.getDistanceInMeters(data.coords, { latitude: _this.destinationLat, longitude: _this.destinationLng });
            if (_this.distanceToDest < 15) {
                //play music here
            }
            if (_this.distanceToDest != null) {
                document.getElementById("distance-h2").innerText = "You are " + Math.round(_this.distanceToDest) + " meters away!";
            }
            _this.directions = {
                origin: { lat: _this.lat, lng: _this.lng },
                destination: { lat: _this.destinationLat, lng: _this.destinationLng },
                travelMode: 'WALKING'
            };
        });
    };
    WalkingTourPage.prototype.mapReady = function (map) {
        this.map = map;
    };
    WalkingTourPage.prototype.centerMap = function () {
        this.map.setCenter({ lat: this.lat, lng: this.lng });
    };
    WalkingTourPage.prototype.zoomChangedBySlider = function (value) {
        this.zoomVal = parseInt("" + value);
    };
    WalkingTourPage.prototype.zoomChangedByMap = function (event) {
        this.zoomVal = parseInt("" + event);
    };
    WalkingTourPage.prototype.nextStop = function () {
        if (this.currentStop < (__WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */].length - 1)) {
            this.currentStop++;
            this.destinationLat = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].lat;
            this.destinationLng = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].lng;
            this.directions = {
                origin: { lat: this.lat, lng: this.lng },
                destination: { lat: this.destinationLat, lng: this.destinationLng },
                travelMode: 'WALKING'
            };
            document.getElementById("test").innerText = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].name;
            this.updateDistance();
        }
    };
    WalkingTourPage.prototype.prevStop = function () {
        if (this.currentStop != 0) {
            this.currentStop--;
            this.destinationLat = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].lat;
            this.destinationLng = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].lng;
            this.directions = {
                origin: { lat: this.lat, lng: this.lng },
                destination: { lat: this.destinationLat, lng: this.destinationLng },
                travelMode: 'WALKING'
            };
            document.getElementById("test").innerText = __WEBPACK_IMPORTED_MODULE_2__tourdata__["a" /* tourInfo */][this.currentStop].name;
            this.updateDistance();
        }
    };
    WalkingTourPage.prototype.updateDistance = function () {
        this.distanceToDest = this._haversineService.getDistanceInMeters({ latitude: this.lat, longitude: this.lng }, { latitude: this.destinationLat, longitude: this.destinationLng });
        document.getElementById("distance-h2").innerText = "You are " + Math.round(this.distanceToDest) + " meters away!";
    };
    WalkingTourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-walking-tour',template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\walking-tour\walking-tour.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> Walking Tour </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n\n\n  <ion-item color="secondary">\n\n    <ion-range [(ngModel)]="zoomVal" min="12" max="22" pin="true"\n\n    \n\n      #ref (change)="zoomChangedBySlider(ref.value)"\n\n\n\n    >\n\n      <ion-icon range-left small name="search"></ion-icon>\n\n      <ion-icon range-right name="search"></ion-icon>\n\n    </ion-range>\n\n</ion-item>\n\n\n\n<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomVal"\n\n\n\n  (mapReady)="mapReady($event)"\n\n\n\n  (zoomChange)="zoomChangedByMap($event)"\n\n\n\n>\n\n    <agm-direction *ngIf="directions" [renderOptions]="directionsOptions" [origin]="directions.origin" [destination]="directions.destination" [travelMode]="directions.travelMode"></agm-direction>\n\n</agm-map>\n\n\n\n  <div text-center>\n\n    <button (click)="prevStop()"  text-left start ion-button color="secondary" icon-start><ion-icon name="arrow-back"></ion-icon> Previous </button>\n\n    <button  (click)="centerMap()" text-center ion-button color="secondary" icon-start><ion-icon name="search"></ion-icon> </button>\n\n    <button (click)="nextStop()" text-right end ion-button color="secondary" icon-end> Next <ion-icon name="arrow-forward"></ion-icon> </button>\n\n  </div>\n\n\n\n<h1 id="test"></h1>\n\n\n\n<h2 id="distance-h2"></h2>\n\n\n\n<p> In this walk you will uncover the rich history of the Holst family in Cheltenham through buildings and landmarks associated with them. We reccommend that you start the walk at the top of Montpellier, Chemtenham. </p>\n\n<p> The composer Gustav Holst was born in Cheltenham in 1874. His father Adolph was born in London and later moved to the town as a young man with his parents Gustavus and Honoria von Holst, as well as his four brothers and sisters. \n\n  Gustavus von Holst (1799-1870), the first ‘Cheltenham Holst’, was originally from Riga, Latvia. </p>\n\n\n\n<p> He began visiting Cheltenham in the 1830s as a music teacher and dealer in harps and pianofortes. He rented homes for the season in a number of areas, such as Tivoli. In the 1850s he brought his family from London and settled permanently in the town. This was due to Gustavus having secured the position of Professor of Music at the newly established Cheltenham Ladies College. </p> \n\n\n\n<p id="info"></p>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\walking-tour\walking-tour.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_haversine__["HaversineService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_haversine__["HaversineService"]) === "function" && _c || Object])
    ], WalkingTourPage);
    return WalkingTourPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=walking-tour.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tour-info/tour-info.module": [
		304,
		1
	],
	"../pages/walking-tour/walking-tour.module": [
		305,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tour_info_tour_info__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__tour_info_tour_info__["a" /* TourInfoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Walking Tour" tabIcon="pin"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { NavController } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
//declare const google: any;
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> Gustav Holst </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h2> Welcome! </h2>\n\n<!-- \n\n  <ion-item>\n\n      <ion-label floating> Campus </ion-label>\n\n      <ion-input [(ngModel)]="campusName" type="text" color="primary"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button icon-left color="danger"\n\n  \n\n    (click)="openCampusMap($campusName)"\n\n\n\n  >\n\n      <ion-icon name="logo-xbox"></ion-icon>\n\n      Show Map\n\n  </button> -->\n\n\n\n  <!-- <ion-item color="secondary">\n\n      <ion-range [(ngModel)]="zoomVal" min="14" max="22" pin="true"\n\n      \n\n        #ref (change)="zoomChangedBySlider(ref.value)"\n\n\n\n      >\n\n        <ion-icon range-left small name="search"></ion-icon>\n\n        <ion-icon range-right name="search"></ion-icon>\n\n      </ion-range>\n\n  </ion-item>\n\n\n\n  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomVal"\n\n  \n\n    (zoomChange)="zoomChangedByMap($event)"\n\n  \n\n  >\n\n      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n\n  </agm-map>\n\n   -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\home\home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <ion-list>\n\n    <ion-item>\n\n      <ion-note item-start>\n\n        Left Note\n\n      </ion-note>\n\n      My Item\n\n      <ion-note item-end>\n\n        Right Note\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_walking_tour_walking_tour__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tour_info_tour_info__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_agm_direction__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_agm_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_agm_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_haversine__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_haversine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_haversine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_walking_tour_walking_tour__["a" /* WalkingTourPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tour_info_tour_info__["a" /* TourInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tour-info/tour-info.module#TourInfoPageModule', name: 'TourInfoPage', segment: 'tour-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walking-tour/walking-tour.module#WalkingTourPageModule', name: 'WalkingTourPage', segment: 'walking-tour', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBg1hrXUm5WIZpjCNDncrw85NU36LDjcPs'
                }),
                __WEBPACK_IMPORTED_MODULE_13_agm_direction__["AgmDirectionModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_walking_tour_walking_tour__["a" /* WalkingTourPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tour_info_tour_info__["a" /* TourInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_haversine__["HaversineService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tourInfo; });
var tourInfo = [
    {
        name: "Rotunda Place",
        lat: 51.892226,
        lng: -2.086077
    },
    {
        name: "second place",
        lat: 50,
        lng: 50
    }
];
//# sourceMappingURL=tourdata.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\GitHub\HolstApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"F:\GitHub\HolstApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\GitHub\HolstApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map