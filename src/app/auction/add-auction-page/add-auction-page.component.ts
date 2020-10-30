import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auction } from '../auction';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-add-auction-page',
  templateUrl: './add-auction-page.component.html',
  styles: [
    `
     .ng-touched.ng-invalid {
        border-color: darkred;
      }

    `
  ]
})
export class AddAuctionPageComponent implements OnInit {

  imgId = 1;

  constructor(private auctionService: AuctionsService) { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm): void {
    const auction = form.value as Auction;
    auction.imgUrl = `https://picsum.photos/id/${auction.imgUrl}/600/600`;

    this.auctionService.addAuction(auction).subscribe(() => {
      form.reset();
      this.imgId = 1;
    });
  }
}
