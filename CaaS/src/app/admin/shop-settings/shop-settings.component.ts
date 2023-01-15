import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from 'src/app/shared/entities/shop';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
 
@Component({
  selector: 'wea5-shop-settings',
  templateUrl: './shop-settings.component.html',
  styles: [
  ]
})

export class ShopSettingsComponent implements OnInit {
  shop: Shop = new Shop();
  changesSaved = false;
  @ViewChild('shopForm', {static: true}) shopForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));

      
  }

  updateShop() {
    this.shop.shopName = this.shopForm.value.shopName;
    this.shop.tenantUser = this.shopForm.value.tenantUser;
    this.shop.tenantEmail = this.shopForm.value.tenantEmail;
    this.shop.picture = this.shopForm.value.picture;


    if(this.shop.shopID != null && this.shop.appKey != null)
      this.shopStoreService.updateShop(this.shop.shopID, this.shop, this.shop.appKey).subscribe();

    this.changesSaved = true;
    window.location.reload();
  }


}
