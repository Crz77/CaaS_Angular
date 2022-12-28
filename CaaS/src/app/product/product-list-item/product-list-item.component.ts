import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/entities/product';


@Component({
  selector: 'a.wea5-product-list-item',
  templateUrl: './product-list-item.component.html',
  styles: [
  ]
})


export class ProductListItemComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit(): void { 
  }

}
