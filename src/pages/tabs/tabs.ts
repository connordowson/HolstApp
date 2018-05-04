import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { WalkingTourPage } from '../walking-tour/walking-tour';
import { ContactPage } from '../contact/contact';
import { TourInfoPage } from "../tour-info/tour-info";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TourInfoPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
