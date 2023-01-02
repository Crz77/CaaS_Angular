import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/entities/customer';
import { Order } from 'src/app/shared/entities/order';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { CustomerStoreService } from 'src/app/shared/services/customer-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { OrderStoreService } from 'src/app/shared/services/order-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';

@Component({
  selector: 'wea5-finished-order',
  templateUrl: './finished-order.component.html',
  styles: [
  ]
})

export class FinishedOrderComponent implements OnInit {
  order: Order = new Order();
  customer: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private customerStoreService: CustomerStoreService,
    private orderStoreService: OrderStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const orderid = this.route.snapshot.params['orderid'];


    this.route.params.subscribe(params => this.orderStoreService
                     .getOrderByShopId(shopid, orderid)
                     .subscribe(res => {
                          this.order = res
                          if(this.order.customerID)
                            this.customerStoreService.getCustomerByShopId(shopid, this.order.customerID)
                                                     .subscribe(res2 => this.customer = res2);                        
                      }));

  }

  goBackToShops() {
    this.router.navigateByUrl("/shops");                                                                        
  }
  
}
