import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from 'src/app/shared/entities/shop';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styles: [
  ]
})

export class AdminHomeScreenComponent implements OnInit {
  @Input() shop: Shop = new Shop();

  constructor(
    private router: Router,    
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService
    ) { }

  ngOnInit(): void { 
    const shopId = this.route.snapshot.params['shopid'];
    this.shop.shopID = shopId;
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));
  }

  goToShopSettings(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/shop-settings");
  }

  goToProducts(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/products");
  }

  goToStatistics(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/statistics");
  }

  goToDiscounts(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/discounts");
  }
}
