import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styles: [
  ]
})
export class AuctionItemComponent implements OnInit {

  auction: Auction = {
    title: 'Kawiarka',
    price: 60,
    imgUrl: 'https://picsum.photos/id/36/200/200'
  };
  canAddToCart = true;

  constructor() { }

  ngOnInit(): void {
  }

}