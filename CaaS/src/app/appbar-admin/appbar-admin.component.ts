import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Cart } from '../shared/entities/cart';
import { Product } from '../shared/entities/product';
import { Shop } from '../shared/entities/shop';
import { authConfig } from './../auth.config';


@Component({
  selector: 'wea5-appbar-admin',
  templateUrl: './appbar-admin.component.html',
  styles: [
  ]
})
export class AppbarAdminComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 
  @Input() cart: Cart = new Cart(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: OAuthService
  ) { this.configureWithNewConfigApi()}

  ngOnInit(): void {
  }

  logout() {
    this.oauthService.logOut(false);
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
