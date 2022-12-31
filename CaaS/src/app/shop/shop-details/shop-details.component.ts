import { Component, ElementRef, ViewChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, retry } from 'rxjs';
import { Cart } from 'src/app/shared/entities/cart';
import { Product } from 'src/app/shared/entities/product';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { Shop } from '../../shared/entities/shop';
import { ShopStoreService } from '../../shared/services/shop-store.service';

@Component({
  selector: 'a.wea5-shop-details',
  templateUrl: './shop-details.component.html',
  styles: [
  ]
})

export class ShopDetailsComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() products: Product [] = []; 
  @Input() cart: Cart = new Cart(); 
  @Output() showListEvent = new EventEmitter<any>();
  


  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService,
    private cartStoreService: CartStoreService,
    private router: Router
  ) { }


  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }
  
    
  ngOnInit() {
    const shopId = this.route.snapshot.params['shopid'];
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));


    this.route.params.subscribe(params =>
      this.productStoreService.getAllActiveProducts(shopId).subscribe(res => this.products = res));

    if(shopId != null)  
      this.cartStoreService.checkCart(shopId);  
  }

  showShopList() {
    this.router.navigateByUrl("/shops");
  } 

}
