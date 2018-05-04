import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TourInfoPage } from './tour-info';

@NgModule({
  declarations: [
    TourInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TourInfoPage),
  ], 
  entryComponents: [
    TourInfoPage,
  ]
})
export class TourInfoPageModule {}
