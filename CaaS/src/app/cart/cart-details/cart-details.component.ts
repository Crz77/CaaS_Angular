import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/entities/cart';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { Shop } from 'src/app/shared/entities/shop';
import { CartItemService } from 'src/app/shared/services/cart-item.service';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-cart-details',
  templateUrl: './cart-details.component.html',
  styles: [
  ]
})

export class CartDetailsComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() cart: Cart = new Cart(); 
  @Output() showListEvent = new EventEmitter<any>();
  cartItems: CartItem [] = [];
  
  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private cartStoreService: CartStoreService,
    private cartItemService: CartItemService,
    private router: Router
 ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => this.shopStoreService
                     .getShopById(params['shopid'])
                     .subscribe(res => this.shop = res));

    this.route.params.subscribe(params => this.cartStoreService
                     .getCartById(params['shopid'], params['cartid'])
                     .subscribe(res => this.cart = res));

    this.route.params.subscribe(params => this.cartItemService
                     .getAllCartItemsByCart(params['shopid'], params['cartid'])
                     .subscribe(res => this.cartItems = res));  
  }
  
      

  onCheckoutClick() {
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/order")
  }

  goToShops(){
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/products")
  }

}
