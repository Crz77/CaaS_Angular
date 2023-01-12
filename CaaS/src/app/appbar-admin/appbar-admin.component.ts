import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../shared/entities/cart';
import { Product } from '../shared/entities/product';
import { Shop } from '../shared/entities/shop';


@Component({
  selector: 'wea5-appbar-admin',
  templateUrl: './appbar-admin.component.html',
  styles: [
  ]
})
export class AppbarAdminComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() product: Product = new Product(); 
  @Input() cart: Cart = new Cart(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl("/home");
  }

}
