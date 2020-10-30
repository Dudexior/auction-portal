import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(form: any): void {
    const auction = form.value as Auction;
    auction.imgUrl = `https://picsum.photos/id/${auction.imgUrl}/600/600`;
  }
}
