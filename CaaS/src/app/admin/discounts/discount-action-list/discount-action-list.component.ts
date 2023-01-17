import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';

@Component({
  selector: 'wea5-discount-action-list',
  templateUrl: './discount-action-list.component.html',
  styles: [
  ]
})

export class DiscountActionListComponent implements OnInit {
  actions: DiscountAction[] = [];
  @ViewChild('actionForm', {static: true}) actionForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private discountActionService: DiscountActionStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];

    this.route.params.subscribe(params =>
      this.discountActionService.getAllDiscountActions(shopId).subscribe(res => this.actions = res)); 
  }

  updateActions() {

  }


}
