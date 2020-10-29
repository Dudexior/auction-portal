import { Component, OnInit } from '@angular/core';

type menuItem = {
  href: string,
  label: string
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: [
  ]
})
export class MainMenuComponent implements OnInit {

  menuItems: menuItem[] = [
    {
      href: 'auctions',
      label: 'Aukcje'
    },
    {
      href: 'promotions',
      label: 'Promocje'
    },
    {
      href: 'advices',
      label: 'Podpowiadamy'
    }
  ]

  showNavbar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
