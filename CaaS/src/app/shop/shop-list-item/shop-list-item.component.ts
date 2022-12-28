import { Component, OnInit, Input, Output } from '@angular/core';
import { Shop } from '../../shared/entities/shop';


@Component({
  selector: 'a.wea5-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styles: [
  ]
})

export class ShopListItemComponent implements OnInit {
  @Input() shop: Shop = new Shop();

  constructor() { }

  ngOnInit(): void { 
  }
   
}


