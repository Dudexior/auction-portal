import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';

const routes: Routes = [
  { path: '', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
