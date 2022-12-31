import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/entities/cart';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { CartItemService } from 'src/app/shared/services/cart-item.service';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})

export class ProductDetailsComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() cart: Cart = new Cart();  
  @Input() product: Product = new Product(); 
  @Output() showListEvent = new EventEmitter<any>();
  
  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService, 
    private cartItemService: CartItemService,
    private cartStoreService: CartStoreService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }


  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];
    const cartid = this.localStorageService.getCartId(shopid);

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);
    this.productStoreService.getProductById(shopid, productid).subscribe(res => this.product = res);

    if(cartid != null)
      this.cartStoreService.getCartById(shopid, cartid).subscribe(res => this.cart = res);
    
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/'+ this.shop.shopID + 'products/' + this.product.productID], { relativeTo: this.route });
  }

  showProductList() {
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/products");
  } 

  addToCart() {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];
    const cartid = this.localStorageService.getCartId(shopid);

    if(cartid != null && this.product.price != null){
      let cartitem = new CartItem(shopid, productid, cartid, 1, this.product.price);
      
      this.cartItemService.createCartItemByShopId(shopid, cartid, cartitem).subscribe();
      this.cartStoreService.updateCart(shopid, cartid).subscribe();
    }  
  }

}
