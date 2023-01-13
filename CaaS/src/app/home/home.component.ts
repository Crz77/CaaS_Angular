import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { CartStoreService } from '../shared/services/cart-store.service';
import { authConfig } from './../auth.config';

@Component({
  selector: 'wea5-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartStoreService: CartStoreService,
    private oauthService: OAuthService    
  ) 
  {
    this.configureWithNewConfigApi();
  }

  ngOnInit(): void {
  }

  browseShops() {
    this.router.navigateByUrl("/shops");
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  get token() {
    let claims:any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

}
