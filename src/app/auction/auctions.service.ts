import { Injectable } from '@angular/core';
import { Auction } from './auction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>('http://localhost:3000/auctions');
  }
}
