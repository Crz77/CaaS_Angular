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

  averageRevPerOrderForMonth: Statistic = new Statistic();
  temp: string = "0";

  averageRevPerOrderForYear: Statistic = new Statistic();
  displayAvgRevPerOrderForYear: string = "";

  MostSoldProductsForMonth: Statistic = new Statistic();
  MostSoldProductsForYear: Statistic = new Statistic();
  NumberOfCurrentCarts: Statistic = new Statistic();
  TotalRevForMonth: Statistic = new Statistic();
  TotalRevForYear: Statistic = new Statistic();

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
      this.temp = this.averageRevPerOrderForMonth.value?.toPrecision(5);  
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



}
