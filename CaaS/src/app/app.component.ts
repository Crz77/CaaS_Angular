import { Component } from '@angular/core';
import { Shop } from './shared/entities/shop';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from './auth.config';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'wea5-root',
  templateUrl: './app.component.html',
  styles: []
})


export class AppComponent {
  title = 'CaaS';

  listOn = true;
  detailsOn = false;
  shop: Shop = new Shop("");

  constructor(private oauthService: OAuthService) {

    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }
  
  showDetails(shop: Shop) {
    this.shop = shop;
    this.listOn = false;
    this.detailsOn = true;
  }

}

