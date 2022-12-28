import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})

export class ProductDetailsComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 
  @Output() showListEvent = new EventEmitter<any>();
  
  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService,
    private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(params['shopid']).subscribe(res => this.shop = res));

    this.route.params.subscribe(params =>
      this.productStoreService.getProductById(params['shopid'], params['productid']).subscribe(res => this.product = res));
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/1', product.productID], { relativeTo: this.route });
  }

  showProductList() {
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/products");
  } 

}
