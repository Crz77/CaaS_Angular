import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartStoreService } from '../shared/services/cart-store.service';

@Component({
  selector: 'wea5-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartStoreService: CartStoreService
  ) { }

  ngOnInit(): void {
  }

  browseShops() {
    this.router.navigateByUrl("/shops");
  }

  login() {
    this.router.navigateByUrl("/admin/home");
  }

}
