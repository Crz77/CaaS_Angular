import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';

@Component({
  selector: 'wea5-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})

export class ProductListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Product>();
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productStoreService: ProductStoreService,
  ) { }  

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.productStoreService.getAllActiveProducts(params['shopid']).subscribe(res => this.products = res));  }

} 
 