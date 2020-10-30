import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styles: [
  ]
})
export class ShoppingCartPageComponent implements OnInit {

  today = new Date();
  cartItems: Auction[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
    });
  }

}
