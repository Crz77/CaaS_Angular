import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { Shop } from 'src/app/shared/entities/shop';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-discount-rule-list',
  templateUrl: './discount-rule-list.component.html',
  styles: [
  ]
})

export class DiscountRuleListComponent implements OnInit {
  rules: DiscountRule[] = [];
  rule: DiscountRule = new DiscountRule();
  shop: Shop = new Shop();
  @ViewChild('ruleForm', {static: true}) ruleForm!: NgForm;
  
  quantityIsEmpty = true;
  timeRuleIsEmpty = true;


  constructor(
    private route: ActivatedRoute,
    private discountRuleService: DiscountRuleStoreService,
    private shopStoreService: ShopStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];

    this.route.params.subscribe(params =>
      this.discountRuleService.getAllDiscountRules(shopId).subscribe(res => this.rules = res)); 
        
    this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res);
  }


  updateRules() {
    this.rules.forEach(r => {
      if(r.qtyRuleAmount != null || (r.timeRuleFrom != null && r.timeRuleTo != null)){
        if(this.shop.shopID != null && r.ruleID != null && this.shop.appKey != null)
        this.discountRuleService.updateDiscountRule(this.shop.shopID, r.ruleID, r, this.shop.appKey)
                                .subscribe();
      }
    });

    window.location.reload();
  }

  createRule(){
    if(this.rule.qtyRuleAmount != null || (this.rule.timeRuleFrom != null && this.rule.timeRuleTo != null)){
      if(this.rule.qtyRuleAmount == null) this.rule.qtyRuleAmount = "";
      if(this.rule.timeRuleFrom == null) this.rule.timeRuleFrom = null as unknown as Date;
      if(this.rule.timeRuleTo == null) this.rule.timeRuleTo = null as unknown as Date;

      if(this.shop.shopID && this.shop.appKey)
        this.discountRuleService.createDiscountRule(this.shop.shopID, this.rule, this.shop.appKey).subscribe();
    }

    window.location.reload();
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
