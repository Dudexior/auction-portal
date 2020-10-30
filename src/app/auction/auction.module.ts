import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';


@NgModule({
  declarations: [AuctionsPageComponent, AuctionItemComponent, PromotionsPageComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: []
})
export class AuctionModule { }
