import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../shared/entities/shop';
import { ShopStoreService } from '../shared/services/shop-store.service';
import { NewShopFormErrorMessages } from './new-shop-form-error-messages';

@Component({
  selector: 'wea5-new-shop-form',
  templateUrl: './new-shop-form.component.html',
  styles: [
  ]
})

export class NewShopFormComponent implements OnInit {
  shop: Shop = new Shop();
  changesSaved = false;

  @ViewChild('shopForm', {static: true}) shopForm!: NgForm;
    errors: { [key: string]: string } = {};

  constructor(
    private shopStoreService: ShopStoreService
  ) { }

  ngOnInit(): void {    
      this.shopForm.statusChanges?.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of NewShopFormErrorMessages) {
      const control = this.shopForm.form.get(message.forControl) || {dirty: false, invalid: false, errors: []};
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

  createShop() {
    this.shop.shopName = this.shopForm.value.shopName;
    this.shop.tenantUser = this.shopForm.value.tenantUser;
    this.shop.tenantEmail = this.shopForm.value.tenantEmail;
    this.shop.picture = this.shopForm.value.picture;

    this.shopStoreService.createShop(this.shop).subscribe();
  }

}
