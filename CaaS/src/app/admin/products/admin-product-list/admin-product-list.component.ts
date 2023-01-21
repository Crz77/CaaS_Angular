import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { ShopListComponent } from 'src/app/shop/shop-list/shop-list.component';

@Component({
  selector: 'wea5-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styles: [
  ]
})

export class AdminProductListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Product>();
  products: Product[] = [];
  shop: Shop = new Shop();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productStoreService: ProductStoreService,
    private shopStoreService: ShopStoreService
  ) { }  

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];
    this.route.params.subscribe(params =>
      this.productStoreService.getAllProducts(shopId).subscribe(res => this.products = res)); 
 
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res);
  }

  goToNewProduct() {
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/new-product");
  }

}
