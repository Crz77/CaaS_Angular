import { Component, Input, OnInit } from '@angular/core';
import { DiscountAction } from 'src/app/shared/entities/discount-action';

@Component({
  selector: 'div.wea5-discount-action',
  templateUrl: './discount-action.component.html',
  styles: [
  ]
})

export class DiscountActionComponent implements OnInit {
  @Input() action: DiscountAction = new DiscountAction();

  constructor() { }

  ngOnInit(): void {
  }

}
