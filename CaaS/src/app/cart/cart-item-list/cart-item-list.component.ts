import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/shared/entities/cart';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { CartItemService } from 'src/app/shared/services/cart-item.service';

@Component({
  selector: 'wea5-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styles: [
  ]
})
export class CartItemListComponent implements OnInit {
  @Input() cart: Cart = new Cart();
  @Output() showDetailsEvent = new EventEmitter<CartItem>();
  cartItems: CartItem[] = [];
  

  constructor(
    private route: ActivatedRoute,
    private cartItemService: CartItemService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.cartItemService.getAllCartItemsByCart(params['shopid'], params['cartid']).subscribe(res => this.cartItems = res));  }

}
