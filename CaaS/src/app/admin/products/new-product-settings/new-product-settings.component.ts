import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-new-product-settings',
  templateUrl: './new-product-settings.component.html',
  styles: [
  ]
})

export class NewProductSettingsComponent implements OnInit {
  product: Product = new Product();
  shop: Shop = new Shop();

  @ViewChild('productForm', {static: true}) productForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService
  ) { }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);
  }

  createProduct(){
    this.product.productName = this.productForm.value.productName;
    this.product.description = this.productForm.value.description;
    this.product.link = this.productForm.value.link;
    this.product.price = this.productForm.value.price;
    this.product.picture = this.productForm.value.picture;
    this.product.actionID = null as unknown as string;
    this.product.ruleID = null as unknown as string;
    this.product.isActive = true as unknown as string;

    if(this.shop.shopID != null && this.shop.appKey != null)
      this.productStoreService.createProduct(this.shop.shopID, this.product, this.shop.appKey).subscribe();

    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/products");  
  }


}
