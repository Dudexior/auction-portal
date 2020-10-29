import { Injectable } from '@angular/core';
import { Auction } from './auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor() { }

  getAuctions(): Auction[] {
    return [
      {
        title: 'Kawiarka',
        price: 60,
        imgUrl: 'https://picsum.photos/id/464/200/200'
      },
      {
        title: 'Garnek',
        price: 100,
        imgUrl: 'https://picsum.photos/id/123/200/200',
        description: 'Voluptate veniam occaecat Lorem et eu Lorem. Non eiusmod enim cupidatat mollit. Enim duis non nostrud ex adipisicing nostrud eiusmod qui excepteur adipisicing quis in. Exercitation ipsum ad sint commodo incididunt anim ullamco exercitation.'
      },
      {
        title: 'Czajnik',
        price: 80,
        imgUrl: 'https://picsum.photos/id/111/200/200'
      }
    ];
  }
}
