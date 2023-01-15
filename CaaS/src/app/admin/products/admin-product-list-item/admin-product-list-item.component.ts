import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { CartItemService } from 'src/app/shared/services/cart-item.service';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'div.wea5-admin-product-list-item',
  templateUrl: './admin-product-list-item.component.html',
  styles: [
  ]
})

export class AdminProductListItemComponent implements OnInit {
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
