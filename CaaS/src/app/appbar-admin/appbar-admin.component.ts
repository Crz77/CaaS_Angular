import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Shop } from '../shared/entities/shop';
import { ShopStoreService } from '../shared/services/shop-store.service';
import { authConfig } from './../auth.config';


@Component({
  selector: 'wea5-appbar-admin',
  templateUrl: './appbar-admin.component.html',
  styles: [
  ]
})

export class AppbarAdminComponent implements OnInit {
  @Input() shop: Shop = new Shop();  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: OAuthService,
    private shopStoreService: ShopStoreService
  ) { 
    this.configureWithNewConfigApi();
  }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];
    this.shop.shopID = shopId;
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));
  }

  logout() {
    console.log(this.oauthService.getAccessToken());
    this.oauthService.logOut();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
