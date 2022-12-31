import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../shared/entities/cart';
import { Product } from '../shared/entities/product';
import { Shop } from '../shared/entities/shop';
import { CartStoreService } from '../shared/services/cart-store.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'wea5-appbar',
  templateUrl: './appbar.component.html',
  styles: [
  ]
})
export class AppbarComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 
  @Input() cart: Cart = new Cart(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private cartStoreService: CartStoreService
  ) { }

  ngOnInit(): void {
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/'+ this.shop.shopID + 'products/' + this.product.productID], { relativeTo: this.route });
  }

  goToCart() {
    let shopid = this.route.snapshot.params['shopid'];
    let cartid = this.localStorageService.getCartId(shopid);
    this.router.navigateByUrl("/shops/" + shopid + "/carts/" + cartid);
  }

}
