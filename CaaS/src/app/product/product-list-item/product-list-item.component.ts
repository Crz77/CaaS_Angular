import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { Product } from 'src/app/shared/entities/product';
import { CartItemService } from 'src/app/shared/services/cart-item.service';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'div.wea5-product-list-item',
  templateUrl: './product-list-item.component.html',
  styles: [
  ]
})

export class ProductListItemComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private cartItemService: CartItemService,
    private cartStoreService: CartStoreService
  ) { }

  ngOnInit(): void { 
  }


}
