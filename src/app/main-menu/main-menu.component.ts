import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: [
  ]
})
export class MainMenuComponent implements OnInit {

  menuItems = ['Aukcje', 'Promocje', 'Podpowiadamy'];

  constructor() { }

  ngOnInit(): void {
  }

}
