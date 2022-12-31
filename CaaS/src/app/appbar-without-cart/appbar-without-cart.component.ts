import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../shared/entities/cart';
import { Product } from '../shared/entities/product';
import { Shop } from '../shared/entities/shop';

@Component({
  selector: 'wea5-appbar-without-cart',
  templateUrl: './appbar-without-cart.component.html',
  styles: [
  ]
})

export class AppbarWithoutCartComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 
  @Input() cart: Cart = new Cart(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/'+ this.shop.shopID + 'products/' + this.product.productID], { relativeTo: this.route });
  }

  goToCart() {
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/carts/" + this.cart.cartID);
  }

}
