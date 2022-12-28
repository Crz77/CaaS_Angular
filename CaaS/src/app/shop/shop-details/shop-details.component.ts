import { Component, ElementRef, ViewChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of, retry } from 'rxjs';
import { Product } from 'src/app/shared/entities/product';
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
  @Output() showListEvent = new EventEmitter<any>();



  

  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService,
    private router: Router
  ) { }

  
    
  ngOnInit() {
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(params['shopid']).subscribe(res => this.shop = res));


    this.route.params.subscribe(params =>
      this.productStoreService.getAllActiveProducts(params['shopid']).subscribe(res => this.products = res));

  }

  showShopList() {
    this.router.navigateByUrl("/shops");
  } 

}
