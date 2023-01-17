import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { Shop } from 'src/app/shared/entities/shop';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-discount-action-list',
  templateUrl: './discount-action-list.component.html',
  styles: [
  ]
})

export class DiscountActionListComponent implements OnInit {
  actions: DiscountAction[] = [];
  action: DiscountAction = new DiscountAction();
  shop: Shop = new Shop();
  @ViewChild('actionForm', {static: true}) actionForm!: NgForm;

  fixedAmountIsEmpty = true;
  percentageIsEmpty = true;  

  constructor(
    private route: ActivatedRoute,
    private discountActionService: DiscountActionStoreService,
    private shopStoreService: ShopStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];

    this.route.params.subscribe(params =>
      this.discountActionService.getAllDiscountActions(shopId).subscribe(res => this.actions = res));
      
    this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res);
  }

  updateActions() {
    this.actions.forEach(a => {
      if(this.shop.shopID != null && a.actionID != null && this.shop.appKey != null)
      this.discountActionService.updateDiscountAction(this.shop.shopID, a.actionID, a, this.shop.appKey)
                                .subscribe();
    });

    window.location.reload();
  }

  createActions(){
    if(this.action.fixedAmount != null || this.action.percentage != null){
      if(this.action.fixedAmount == null) this.action.fixedAmount = "";
      if(this.action.percentage == null) this.action.percentage = "";

      if(this.shop.shopID && this.shop.appKey)
        this.discountActionService.createDiscountAction(this.shop.shopID, this.action, this.shop.appKey).subscribe();
    }

    window.location.reload();
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
