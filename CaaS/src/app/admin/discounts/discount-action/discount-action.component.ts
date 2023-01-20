import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { Shop } from 'src/app/shared/entities/shop';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'div.wea5-discount-action',
  templateUrl: './discount-action.component.html',
  styles: [
  ]
})

export class DiscountActionComponent implements OnInit {
  @Input() action: DiscountAction = new DiscountAction();
  shop: Shop = new Shop();
  
  fixedAmountIsEmpty = true;
  percentageIsEmpty = true;  
  
           
  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private discountActionService: DiscountActionStoreService
  ) { }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);

    
    if(this.action.percentage != null){
        this.percentageIsEmpty = false;
        this.fixedAmountIsEmpty = true;
    }
    else {
      this.fixedAmountIsEmpty = false;
      this.percentageIsEmpty = true;
    }
  }

  deleteAction() {
    if(this.action.shopID != null && this.action.actionID != null && this.shop.appKey != null) {
      this.discountActionService.deleteDiscountAction(this.action.shopID, this.action.actionID, this.shop.appKey)
      .subscribe();
    
      window.location.reload();
    }
  }

  onKeyUpPercentage(x: any) {
    if(x.target.value < 0 || x.target.value.length > 4 || x.target.value > 0.99)
      x.target.value = 0;

    this.action.percentage = x.target.value;

    if(this.action.percentage != null) {
      if(this.action.percentage == "" )
        this.percentageIsEmpty = true;
      else  
        this.percentageIsEmpty = false;
    }
  }

  onKeyUpFixedAmount(x: any) {
    this.action.fixedAmount = x.target.value;
    
    if(this.action.fixedAmount != null) {
      if(this.action.fixedAmount == "")
        this.fixedAmountIsEmpty = true;
    else  
      this.fixedAmountIsEmpty = false;
    }
  }
  
}



