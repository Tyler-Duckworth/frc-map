import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardProvider } from '../../providers/card/card';
import { MapMouseEvent} from 'mapbox-gl';
import {ContactPage} from '../contact/contact';
import * as json from './features2018.json';
import * as jsonian from './features2017.json';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  events: object;
  data: any;
  year: number;
  constructor(public navCtrl: NavController, private card: CardProvider) {  }
  ngOnInit() {
    this.events = json;
    this.card.currentCard.subscribe(card => this.data = card);
  }
  onClick(evt: MapMouseEvent){
    let event = (<any>evt).features[0].properties
    console.log(event);
    this.card.changeCard([event.name, event.address, event.key]);
    this.navCtrl.push(ContactPage);
  }
  navigate(){
    this.navCtrl.push(ContactPage);
  }
  yearChange(){
    console.log(this.year);
    if(this.year == 2017){
      this.events = jsonian;
    } else{
      this.events = json;
    }
  }
}
