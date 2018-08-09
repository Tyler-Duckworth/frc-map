import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

/*
  Generated class for the CardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardProvider {
  private card = new BehaviorSubject<string[]>(['Smoky Mountain Regional', 'L&N STEM Academy, Henley Street, Knoxville, TN', '2018tnkn']);
  currentCard = this.card.asObservable();

  constructor() {  }

  changeCard(data: string[]){
    this.card.next(data);
  }

}
