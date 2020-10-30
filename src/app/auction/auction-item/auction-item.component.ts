import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../auction';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styles: [
  ]
})
export class AuctionItemComponent implements OnInit {

  @Input() auction: Auction;

  canAddToCart = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    this.cartService.addItem(this.auction);
  }
}
