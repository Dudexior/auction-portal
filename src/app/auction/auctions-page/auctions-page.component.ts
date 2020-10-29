import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctions-page',
  template: `
    <section>
      <h2> Lista naszych aukcji </h2>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3 col-lg-3">
          <app-auction-item></app-auction-item>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AuctionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
