import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../../shared/entities/shop';
import { ShopStoreService } from '../../shared/services/shop-store.service';

@Component({
  selector: 'wea5-shop-list',
  templateUrl: './shop-list.component.html',
  styles: [
  ]
})

export class ShopListComponent implements OnInit {
  @Output() showDetailsEvent = new EventEmitter<Shop>();
  shops: Shop[] = [];

  constructor(
    private shopStoreService: ShopStoreService
  ) { }
 
  ngOnInit(): void {
    this.shopStoreService.getAllShops().subscribe(res => this.shops = res);
  }

}
