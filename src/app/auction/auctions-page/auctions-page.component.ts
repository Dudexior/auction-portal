import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';

@Component({
  selector: 'app-auctions-page',
  template: `
    <section>
      <h2> Lista naszych aukcji </h2>
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
export class AuctionsPageComponent implements OnInit {

  auctions: Auction[] = [
    {
      title: 'Kawiarka',
      price: 60,
      imgUrl: 'https://picsum.photos/id/464/200/200'
    },
    {
      title: 'Garnek',
      price: 100,
      imgUrl: 'https://picsum.photos/id/123/200/200',
      description: 'Voluptate veniam occaecat Lorem et eu Lorem. Non eiusmod enim cupidatat mollit. Enim duis non nostrud ex adipisicing nostrud eiusmod qui excepteur adipisicing quis in. Exercitation ipsum ad sint commodo incididunt anim ullamco exercitation.'
    },
    {
      title: 'Czajnik',
      price: 80,
      imgUrl: 'https://picsum.photos/id/111/200/200'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
