import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from 'src/app/shared/entities/shop';
import { Statistic } from 'src/app/shared/entities/statistic';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { StatisticStoreService } from 'src/app/shared/services/statistic-store.service';

@Component({
  selector: 'wea5-statistics',
  templateUrl: './statistics.component.html',
  styles: [
  ]
})

export class StatisticsComponent implements OnInit {
  shop: Shop = new Shop();
  @ViewChild('avgRevPerOrderMonthForm', {static: true}) avgRevPerOrderMonthForm!: NgForm;
  @ViewChild('avgRevPerOrderYearForm', {static: true}) avgRevPerOrderYearForm!: NgForm;
  @ViewChild('totalRevPerOrderMonthForm', {static: true}) totalRevPerOrderMonthForm!: NgForm;
  @ViewChild('totalRevPerOrderYearForm', {static: true}) totalRevPerOrderYearForm!: NgForm;
  @ViewChild('numberOfCurrentCartsForm', {static: true}) numberOfCurrentCartsForm!: NgForm;

  averageRevPerOrderForMonth: Statistic = new Statistic();
  displayAvgRevPerOrderForMonth: string = "0";

  averageRevPerOrderForYear: Statistic = new Statistic();
  displayAvgRevPerOrderForYear: string = "0";

  totalRevForMonth: Statistic = new Statistic();
  displayTotalRevPerOrderForMonth: string = "0";

  totalRevForYear: Statistic = new Statistic();
  displayTotalRevPerOrderForYear: string = "0";

  numberOfCurrentCarts: Statistic = new Statistic();
  displayNumberOfCurrentCarts: string = "0";

  constructor(
    private router: Router,    
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private statisticStoreService: StatisticStoreService
  ) { }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params['shopid'];
    this.shop.shopID = shopId;
    this.route.params.subscribe(params =>
      this.shopStoreService.getShopById(shopId).subscribe(res => this.shop = res));

    this.getCurrentCarts();
  }

  getAvgRevPerOrderForMonth(){
    let year = this.avgRevPerOrderMonthForm.value.year;
    let month = this.avgRevPerOrderMonthForm.value.month;

    if(this.shop.shopID != null && this.shop.appKey != null) {
      this.statisticStoreService.getAvgPerOrderForMonth(this.shop.shopID, year, month, this.shop.appKey)
                                .subscribe(res => this.averageRevPerOrderForMonth.value = res);
    }

    this.averageRevPerOrderForMonth.year = year;
    this.averageRevPerOrderForMonth.month = month;

    if(this.averageRevPerOrderForMonth.value != null )
      this.displayAvgRevPerOrderForMonth = this.averageRevPerOrderForMonth.value?.toPrecision(5);  
  }

  getAvgRevPerOrderForYear(){
    let year = this.avgRevPerOrderYearForm.value.year;

    if(this.shop.shopID != null && this.shop.appKey != null) {
      this.statisticStoreService.getAvgPerOrderForYear(this.shop.shopID, year, this.shop.appKey)
                                .subscribe(res => this.averageRevPerOrderForYear.value = res);

    }

    this.averageRevPerOrderForYear.year = year;
    
    if(this.averageRevPerOrderForYear.value != null )
      this.displayAvgRevPerOrderForYear = this.averageRevPerOrderForYear.value?.toPrecision(5);  
  }

  getTotalRevPerOrderForMonth(){
    let year = this.totalRevPerOrderMonthForm.value.year;
    let month = this.totalRevPerOrderMonthForm.value.month;

    if(this.shop.shopID != null && this.shop.appKey != null) {
      this.statisticStoreService.getTotalRevPerOrderForMonth(this.shop.shopID, year, month, this.shop.appKey)
                                .subscribe(res => this.totalRevForMonth.value = res);
    }

    this.totalRevForMonth.year = year;
    this.totalRevForMonth.month = month;
    
    if(this.totalRevForMonth.value != null )
      this.displayTotalRevPerOrderForMonth = this.totalRevForMonth.value?.toPrecision(5);   
  }

  getTotalRevPerOrderForYear(){
    let year = this.totalRevPerOrderYearForm.value.year;

    if(this.shop.shopID != null && this.shop.appKey != null) {
      this.statisticStoreService.getTotalPerOrderForYear(this.shop.shopID, year, this.shop.appKey)
                                .subscribe(res => this.totalRevForYear.value = res);

    }

    this.totalRevForYear.year = year;
    
    if(this.totalRevForYear.value != null )
      this.displayTotalRevPerOrderForYear = this.totalRevForYear.value.toString();  
  }

  getCurrentCarts(){
    if(this.shop.shopID != null && this.shop.appKey != null) {
      this.statisticStoreService.getNumberOfCurrentOpenCarts(this.shop.shopID, this.shop.appKey)
                                .subscribe(res => this.numberOfCurrentCarts.value = res);
    }

    if(this.numberOfCurrentCarts.value != null)
      this.displayNumberOfCurrentCarts = this.numberOfCurrentCarts.value?.toString();
  }
}
