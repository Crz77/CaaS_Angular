import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-admin-product-settings',
  templateUrl: './admin-product-settings.component.html',
  styles: [
  ]
})

export class AdminProductSettingsComponent implements OnInit {
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
    this.productStoreService.getProductById(shopid, productid).subscribe(res => this.product = res);
      
  }

  updateProduct() {
    this.product.productName = this.productForm.value.productName;
    this.product.description = this.productForm.value.description;
    this.product.link = this.productForm.value.link;
    this.product.price = this.productForm.value.price;
    this.product.picture = this.productForm.value.picture;


    if(this.product.shopID != null && this.product.productID != null && this.product.categoryID != null && this.shop.appKey!=null)
      this.productStoreService.updateProduct(this.product.shopID, this.product.productID, this.product.categoryID,
                                             this.product, this.shop.appKey).subscribe();

    window.location.reload();
  }

  deleteProduct(){
    if(this.shop.shopID != null && this.product.productID != null && this.shop.appKey != null)
      this.productStoreService.deleteProduct(this.shop.shopID, this.product.productID, this.shop.appKey).subscribe();

    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/products");
  }

 
}
