import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'add-auction', component: AddAuctionPageComponent },
  { path: 'shopping-cart', component: ShoppingCartPageComponent },
  { path: '**', component: PromotionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
