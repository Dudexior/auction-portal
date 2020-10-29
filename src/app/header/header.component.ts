import { Component, Input, OnInit } from '@angular/core';

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

  @Input() appTitle = 'Auction Portal!';

  constructor() { }

  ngOnInit(): void {
  }

}
