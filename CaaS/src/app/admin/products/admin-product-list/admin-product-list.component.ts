import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';

@Component({
  selector: 'wea5-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styles: [
  ]
})

export class AdminProductListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Product>();
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productStoreService: ProductStoreService,
  ) { }  

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];
    this.route.params.subscribe(params =>
      this.productStoreService.getAllProducts(shopId).subscribe(res => this.products = res));  }

}
