import { Injectable } from '@angular/core';
import { Auction } from './auction';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private auction$ = new BehaviorSubject<Auction[]>([]);

  addItem(auction: Auction): void {
    const auctions = this.auction$.getValue();
    auctions.push(auction);
    this.auction$.next(auctions);
  }

  getItems(): Observable<Auction[]> {
    return this.auction$.asObservable();
  }

  countItems(): Observable<number> {
    return this.auction$.pipe(map((auctions: Auction[]) => auctions.length));
  }
}
