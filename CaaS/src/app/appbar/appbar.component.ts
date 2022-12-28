import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/entities/product';
import { Shop } from '../shared/entities/shop';

@Component({
  selector: 'wea5-appbar',
  templateUrl: './appbar.component.html',
  styles: [
  ]
})
export class AppbarComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/'+ this.shop.shopID + 'products/' + this.product.productID], { relativeTo: this.route });
  }

}
