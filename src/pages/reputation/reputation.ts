import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../../providers/authenticatorService';
import { Config } from '../../config';
import { AddQualifyPage } from '../addQualify/addQualify';


@IonicPage()
@Component({
  selector: 'page-reputation',
  templateUrl: 'reputation.html',
})
export class ReputationPage {



  constructor(
  public navCtrl: NavController
  ) {
  }

  ionViewDidLoad() {}

gotoAddQualify(data) {
    console.log(data);
    this.navCtrl.push(AddQualifyPage,{dataService: data});
  }

 }
