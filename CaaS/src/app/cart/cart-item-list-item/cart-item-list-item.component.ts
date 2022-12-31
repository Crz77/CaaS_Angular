import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { Product } from 'src/app/shared/entities/product';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { Cart } from 'src/app/shared/entities/cart';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { CartDetailsComponent } from 'src/app/cart/cart-details/cart-details.component';
import { CartItemService } from 'src/app/shared/services/cart-item.service';

@Component({
  selector: 'div.wea5-cart-item-list-item',
  templateUrl: './cart-item-list-item.component.html',
  styles: [
  ]
})

export class CartItemListItemComponent implements OnInit {
  @Input() cartItem: CartItem = new CartItem();
  @Input() product: Product = new Product();
  @Input() cart: Cart = new Cart();
  @Output() showListEvent = new EventEmitter<any>();


  constructor(
    private route: ActivatedRoute,
    private productStoreService: ProductStoreService,
    private cartStoreService: CartStoreService,
    private cartItemsService: CartItemService
  ) { }


  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.cartItem.productID;

    if(productid)
      this.productStoreService.getProductById(shopid, productid)
                              .subscribe(res => this.product = res);

  }


  increaseQuantity() {
    const shopid = this.route.snapshot.params['shopid'];
    const cartid = this.route.snapshot.params['cartid'];
    const productid = this.cartItem.productID;

    if(this.cartItem.quantity != null && 
       this.cartItem.price != null && 
       this.cart.finalPrice != null &&
       productid != null) {

      this.cartItem.quantity += 1;
      this.cart.finalPrice += this.cartItem.price;
      this.cartItemsService.updateCartItemById(shopid, cartid, productid, this.cartItem).subscribe();
      this.cartStoreService.updateCart(shopid, cartid).subscribe();
    }
  }

  decreaseQuantity() {
    const shopid = this.route.snapshot.params['shopid'];
    const cartid = this.route.snapshot.params['cartid'];
    const productid = this.cartItem.productID;

    if(this.cartItem.quantity != null && 
       this.cartItem.price != null && 
       this.cart.finalPrice != null &&
       productid != null) {
        
      if(this.cartItem.quantity <= 1) return;
      else {
        this.cartItem.quantity -= 1;
        this.cart.finalPrice -= this.cartItem.price;
        this.cartItemsService.updateCartItemById(shopid, cartid, productid, this.cartItem).subscribe();
        this.cartStoreService.updateCart(shopid, cartid).subscribe();
      }
    }
  }

  deleteCartItem() {
    const shopid = this.route.snapshot.params['shopid'];
    const cartid = this.route.snapshot.params['cartid'];
    const productid = this.cartItem.productID;

    if(productid != null) {
      this.cartItemsService.deleteCartItem(shopid, cartid, productid).subscribe();
      this.cartStoreService.updateCart(shopid, cartid).subscribe();
      window.location.reload();
  }
  }
}
