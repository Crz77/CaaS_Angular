import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Shop } from '../shared/entities/shop';
import { CartStoreService } from '../shared/services/cart-store.service';
import { ShopStoreService } from '../shared/services/shop-store.service';
import { authConfig } from './../auth.config';
import { LoginErrorMessages } from './login-error-messages';

@Component({
  selector: 'wea5-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Shop>();
  @ViewChild('loginForm', {static: true}) loginForm!: NgForm;
  shops: Shop[] = [];
  shop = new Shop();
  errors: { [key: string]: string } = {};
  invalidAppKey = false;

  constructor(
    private router: Router,
    private shopStoreService: ShopStoreService,
    private oauthService: OAuthService    
  ) 
  {
    this.configureWithNewConfigApi();
    
  }

  ngOnInit(): void {
    this.shopStoreService.getAllShops().subscribe(res => this.shops = res);

    this.loginForm.statusChanges?.subscribe(() => this.updateErrorMessages());
  }

  browseShops() {
    this.router.navigateByUrl("/shops");
  }

  login() {
    this.shops.forEach(s => {
      if(s.appKey == this.loginForm.value.appKey){
        if(s.appKey!=null){
          this.shop = s;
          if(s.shopID != null)
            localStorage.setItem("shopid", s.shopID?.toString());    
            
          this.oauthService.initCodeFlow();
        }
      }  
      else{
        this.loginForm.resetForm();
        this.invalidAppKey = true;
      }
    });    
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of LoginErrorMessages) {
      const control = this.loginForm.form.get(message.forControl) || {dirty: false, invalid: false, errors: []};
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors != null &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
          this.errors[message.forControl] = message.text;
      }
    }
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  goToNewShopForm(){
    this.router.navigateByUrl("new-shop");
  }

}
