import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';
import { HttpClientModule } from '@angular/common/http';
import { AdviceModule } from './advice/advice.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuctionModule,
    AdviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
