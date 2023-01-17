import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from 'src/app/shared/entities/shop';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-discount-home-screen',
  templateUrl: './discount-home-screen.component.html',
  styles: [
  ]
})

export class DiscountHomeScreenComponent implements OnInit {
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

  goToRules(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/discounts/rules");
  }

  goToActions(){
    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/discounts/actions");
  }

}
