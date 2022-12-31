import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shops',
    component: ShopListComponent
  },
  {
    path: 'shops/:shopid/products',
    component: ShopDetailsComponent
  },
  {
    path: 'shops/:shopid/products/:productid',
    component: ProductDetailsComponent
  },
  {
    path: 'shops/:shopid/carts/:cartid',
    component: CartDetailsComponent
  },
  {
    path: 'shops/:shopid/customers',
    component: CustomerDetailsComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
