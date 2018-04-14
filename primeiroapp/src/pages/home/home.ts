import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public valor:String='COMEÇAR'
  constructor(public navCtrl: NavController) {
    }
    segunda(){
      this.navCtrl.push('SegundaPage');
  }


}
