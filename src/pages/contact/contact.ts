import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CardProvider} from '../../providers/card/card'
import {TbaProvider} from '../../providers/tba/tba'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  event: string[];
  key: string;
  name: string;
  address: string;
  gmaps: string;
  teams: any;
  constructor(public navCtrl: NavController, private card: CardProvider, private tba: TbaProvider) {
    this.card.currentCard.subscribe(card => this.updatePage(card));
  }
  updatePage(data: any){
    console.log(data);
    this.event = data;
    this.key = data[2];
    this.name = data[0];
    this.address = data[1];
    let newstr = this.address.replace(/&/g, "%26").split(' ').join('+');
    this.gmaps = 'https://www.google.com/maps/search/?api=1&query=' + newstr;
    this.tba.getTeams(this.key).subscribe(thing => {this.teams=thing});
  }

}
