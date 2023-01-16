import { Component, Input, OnInit } from '@angular/core';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';

@Component({
  selector: 'div.wea5-discount-rule',
  templateUrl: './discount-rule.component.html',
  styles: [
  ]
})

export class DiscountRuleComponent implements OnInit {
  @Input() rule: DiscountRule = new DiscountRule();

  constructor() { }

  ngOnInit(): void {
  }

}
