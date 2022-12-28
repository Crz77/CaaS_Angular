import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { Product } from '../shared/entities/product';
import { ShopStoreService } from '../shared/services/shop-store.service';

@Component({
  selector: 'wea5-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})

export class SearchComponent implements OnInit {
  @Output() productsSelected = new EventEmitter<Product>();
  keyup = new EventEmitter<string>();

  shopid: string = "";
  products: Product[] = [];
  isLoading: boolean = false;
  foundProducts: Product[] = []; 

  constructor(
    private ss: ShopStoreService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.shopid = params['shopid']);
   
    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.ss.search(this.shopid, searchTerm)),
      tap(() => this.isLoading = false))
      .subscribe(products => {this.foundProducts = products; console.log(products);})
  }
}



