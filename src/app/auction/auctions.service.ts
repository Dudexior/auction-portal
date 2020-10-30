import { Injectable } from '@angular/core';
import { Auction } from './auction';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  baseURL = environment.backendURL;

  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(this.baseURL + '/auctions');
  }

  addAuction(auction: Auction): Observable<Auction[]> {
    return this.http.post<Auction[]>(this.baseURL + '/auctions', auction);
  }
}
