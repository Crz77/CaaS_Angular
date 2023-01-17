import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';

@Component({
  selector: 'wea5-discount-rule-list',
  templateUrl: './discount-rule-list.component.html',
  styles: [
  ]
})

export class DiscountRuleListComponent implements OnInit {
  rules: DiscountRule[] = [];

  constructor(
    private route: ActivatedRoute,
    private discountRuleService: DiscountRuleStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];

    this.route.params.subscribe(params =>
      this.discountRuleService.getAllDiscountRules(shopId).subscribe(res => this.rules = res)); 
  }
}
