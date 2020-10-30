import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuctionsPageComponent, AuctionItemComponent, PromotionsPageComponent, AddAuctionPageComponent, ShoppingCartPageComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    FormsModule
  ],
  exports: []
})
export class AuctionModule { }
