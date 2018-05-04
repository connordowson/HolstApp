import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkingTourPage } from './walking-tour';

@NgModule({
  declarations: [
    WalkingTourPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkingTourPage),
  ],
})
export class WalkingTourPageModule {}
