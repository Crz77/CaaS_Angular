import { Component } from '@angular/core';
import { Shop } from './shared/entities/shop';

@Component({
  selector: 'wea5-root',
  templateUrl: './app.component.html',
  styles: []
})


export class AppComponent {
  title = 'CaaS';

  listOn = true;
  detailsOn = false;
  shop: Shop = new Shop("");

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  
  showDetails(shop: Shop) {
    this.shop = shop;
    this.listOn = false;
    this.detailsOn = true;
  }
}


