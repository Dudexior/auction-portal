import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auction } from '../auction';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-auctions-page',
  template: `
    <section>
      <h2> Lista naszych aukcji </h2>
      <div class="alert alert-danger" *ngIf="errorText">
        {{errorText}}
      </div>
      <div class="row">
        <div *ngFor="let auction of auctions" class="col-12 col-sm-6 col-md-3 col-lg-3">
          <app-auction-item [auction]="auction"></app-auction-item>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AuctionsPageComponent implements OnInit, OnDestroy {

  auctions: Auction[] = [];
  errorText: string;

  auctionSubscription: Subscription;

  constructor(private auctionsService: AuctionsService) { }

  ngOnInit(): void {
    this.auctionSubscription = this.auctionsService.getAuctions().subscribe((res: Auction[]) => {
      this.auctions = res;
    }, (err: HttpErrorResponse) => {
      this.errorText = err.message;
      console.error(err);
    });
  }

  ngOnDestroy(): void {
    this.auctionSubscription.unsubscribe();
  }

}
