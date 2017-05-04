import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { RelevePage } from '../releve/releve';
import { PrevisionPage } from '../prevision/prevision';
import { WebcamPage } from '../webcam/webcam';
//import { HomePage } from '../home/home';
//import { ApiServicePrevision } from '../../providers/api-service-prevision';
/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
//  providers: [ApiServicePrevision],
})
export class TabsPage {
  tab1Root: any = RelevePage;
  tab2Root: any = PrevisionPage;
  tab3Root: any = WebcamPage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }




}
