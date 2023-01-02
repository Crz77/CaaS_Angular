import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Cart } from 'src/app/shared/entities/cart';
import { Customer } from 'src/app/shared/entities/customer';
import { Order } from 'src/app/shared/entities/order';
import { OrderForCreation } from 'src/app/shared/entities/order-for-creation';
import { Shop } from 'src/app/shared/entities/shop';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { OrderStoreService } from 'src/app/shared/services/order-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { OrderDetailsErrorMessages } from './order-details-error-messages';

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

  order: Order = new Order();

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

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const cartid = this.localStorageService.getCartId(shopid);


    this.route.params.subscribe(params => this.shopStoreService
                     .getShopById(shopid)
                     .subscribe(res => this.shop = res));

    if(cartid != null)
      this.route.params.subscribe(params => this.cartStoreService
                        .getCartById(shopid, cartid)
                        .subscribe(res => this.cart = res));

    this.myForm.statusChanges?.subscribe(() => this.updateErrorMessages());
  }


  updateErrorMessages() {
    this.errors = {};
    for (const message of OrderDetailsErrorMessages) {
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



  submitForm() {
    this.orderForCreation.creditCardNumber = this.myForm.value.cardNumber;
    this.orderForCreation.eMail = this.myForm.value.email;
    this.orderForCreation.firstName = this.myForm.value.firstName;
    this.orderForCreation.lastName = this.myForm.value.lastName;
    this.orderForCreation.shopID = this.cart.shopID;

    if(this.cart.shopID != null && this.cart.cartID != null){
      let newOrder: Observable<Order> =  this.orderStoreService.createNewOrder(this.cart.shopID, this.cart.cartID, this.orderForCreation);

      newOrder.subscribe(res => {
        if(this.cart.shopID != null && this.cart.cartID != null) {
          this.order = res; 
          this.localStorageService.deleteCartId(this.cart.shopID ,this.cart.cartID);
          this.router.navigateByUrl("/shops/" + this.cart.shopID + "/order-details/" + this.order.orderID);                                                                        
        }      
      })
    }
}


}
