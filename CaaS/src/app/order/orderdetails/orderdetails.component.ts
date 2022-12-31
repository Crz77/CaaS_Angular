import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/entities/cart';
import { Customer } from 'src/app/shared/entities/customer';
import { OrderForCreation } from 'src/app/shared/entities/order-for-creation';
import { Shop } from 'src/app/shared/entities/shop';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { OrderStoreService } from 'src/app/shared/services/order-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { OrderDetailsErrorMEssages } from '../order-details-error-messages';

@Component({
  selector: 'wea5-orderdetails',
  templateUrl: './orderdetails.component.html',
  styles: [
  ]
})
export class OrderdetailsComponent implements OnInit {

  @Input() shop: Shop = new Shop();  
  @Input() cart: Cart = new Cart(); 
  @Input() customer: Customer = new Customer();
  @Output() showListEvent = new EventEmitter<any>();

  @ViewChild('myForm', {static: true}) myForm!: NgForm;
    orderForCreation = new OrderForCreation();
    errors: { [key: string]: string } = {};


  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private cartStoreService: CartStoreService,
    private orderStoreService: OrderStoreService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.shopStoreService
                     .getShopById(params['shopid'])
                     .subscribe(res => this.shop = res));

    this.route.params.subscribe(params => this.cartStoreService
                     .getCartById(params['shopid'], params['cartid'])
                     .subscribe(res => this.cart = res));

    this.myForm.statusChanges?.subscribe(() => this.updateErrorMessages());

  }

  /*submitForm() {
    const cartid = this.route.snapshot.params['cartid'];

    this.orderForCreation.firstName = this.myForm.value.firstName;
    this.orderForCreation.lastName = this.myForm.value.lastName;
    this.orderForCreation.eMail = this.myForm.value.eMail;
    this.orderForCreation.creditCardNumber = this.myForm.value.creditCardNumber;
    this.orderForCreation.shopID = this.customer.shopID;

    if(this.customer.shopID != null){
      this.orderStoreService.createNewOrder(this.customer.shopID, cartid, this.orderForCreation).subscribe();
      this.localStorageService.deleteCartId(this.customer.shopID, cartid);
    }
  }
*/
  submitForm()
  {

  }

  
  updateErrorMessages() {
    this.errors = {};
    for (const message of OrderDetailsErrorMEssages) {
      const control = this.myForm.form.get(message.forControl) || {dirty: false, invalid: false, errors: []};
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
    
}
