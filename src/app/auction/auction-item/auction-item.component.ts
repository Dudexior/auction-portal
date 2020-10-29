import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../auction';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styles: [
  ]
})
export class AuctionItemComponent implements OnInit {

  @Input() auction: Auction;

  canAddToCart = true;

  constructor() { }

  ngOnInit(): void {
  }

}