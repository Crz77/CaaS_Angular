import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/shared/entities/shop';

@Component({
  selector: 'wea5-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styles: [
  ]
})

export class AdminHomeScreenComponent implements OnInit {
  @Input() shop: Shop = new Shop();

  constructor() { }

  ngOnInit(): void { 
  }

}
