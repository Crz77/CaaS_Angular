import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';

@Component({
  selector: 'wea5-discount-list',
  templateUrl: './discount-list.component.html',
  styles: [
  ]
})

export class DiscountListComponent implements OnInit {
  rules: DiscountRule[] = [];
  actions: DiscountAction[] = [];

  constructor(
    private route: ActivatedRoute,
    private discountRuleService: DiscountRuleStoreService,
    private discountActionService: DiscountActionStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];

    this.route.params.subscribe(params =>
      this.discountRuleService.getAllDiscountRules(shopId).subscribe(res => this.rules = res)); 

    this.route.params.subscribe(params =>
      this.discountActionService.getAllDiscountActions(shopId).subscribe(res => this.actions = res)); 
  }

}
