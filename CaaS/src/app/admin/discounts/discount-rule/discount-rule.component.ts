import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { Shop } from 'src/app/shared/entities/shop';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'div.wea5-discount-rule',
  templateUrl: './discount-rule.component.html',
  styles: [
  ]
})

export class DiscountRuleComponent implements OnInit {
  @Input() rule: DiscountRule = new DiscountRule();
  shop: Shop = new Shop();

  quantityIsEmpty = true;
  timeRuleIsEmpty = true;


  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private discountRuleService: DiscountRuleStoreService
  ) { }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);

    if(this.rule.qtyRuleAmount != null){
      this.quantityIsEmpty = false;
      this.timeRuleIsEmpty = true;
    }
    else {
      this.quantityIsEmpty = true;
      this.timeRuleIsEmpty = false;
    }

    //format date that it will be displayed correctly in the input fields
    const datepipe: DatePipe = new DatePipe('en-US')
    this.rule.timeRuleFrom = datepipe.transform(this.rule.timeRuleFrom, 'YYYY-MM-dd') as unknown as Date;
    this.rule.timeRuleTo = datepipe.transform(this.rule.timeRuleTo, 'YYYY-MM-dd') as unknown as Date;
  }

  deleteRule() {
    if(this.rule.shopID != null && this.rule.ruleID != null && this.shop.appKey != null) {
      this.discountRuleService.deleteDiscountRule(this.rule.shopID, this.rule.ruleID, this.shop.appKey)
      .subscribe();
    
      window.location.reload();
    }
  }

  onKeyUpName(x: any) {
    this.rule.ruleName = x.target.value;
  }

  onKeyUpQuantity(x: any) {
    this.rule.qtyRuleAmount = x.target.value;
    
    if(this.rule.qtyRuleAmount != null) {
      if(this.rule.qtyRuleAmount == "")
        this.quantityIsEmpty = true;
    else  
      this.quantityIsEmpty = false;
    }
  }

  onKeyUpDateFrom(x: any) {
    this.rule.timeRuleFrom = x.target.value;
    
    if(this.rule.timeRuleFrom != null) {
      if(this.rule.timeRuleFrom.toString() == "")
        this.timeRuleIsEmpty = true;
    else  
      this.timeRuleIsEmpty = false;
    }
  }

  onKeyUpDateTo(x: any) {
    this.rule.timeRuleTo = x.target.value;
    
    if(this.rule.timeRuleTo != null) {
      if(this.rule.timeRuleTo.toString() == "")
        this.timeRuleIsEmpty = true;
    else  
      this.timeRuleIsEmpty = false;
    }
  }


}
