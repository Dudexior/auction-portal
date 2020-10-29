import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    h1{
      color: red;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  appTitle = 'Auction Portal!';

  constructor() { }

  ngOnInit(): void {
  }

}
