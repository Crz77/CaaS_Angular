import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Shop } from 'src/app/shared/entities/shop';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-intermediate-screen',
  templateUrl: './intermediate-screen.component.html',
  styles: [
  ]
})

export class IntermediateScreenComponent implements OnInit {
  shop: Shop = new Shop();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private oauthService: OAuthService,
    private shopStoreService: ShopStoreService    
  ) { }

  ngOnInit(): void {    
    const shopId = localStorage.getItem("shopid");

    if(shopId != null) {
      localStorage.removeItem(shopId);

      this.route.params.subscribe(params =>
        this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));
    }
  }

  continueToShop() {
    if(this.shop.shopID != null)
      localStorage.removeItem(this.shop.shopID.toString());

    this.router.navigateByUrl("/admin/" + this.shop.shopID);
  }

  backHome() {
    this.router.navigateByUrl("/home");
  }
  

}
