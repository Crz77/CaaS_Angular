import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeScreenComponent } from './admin-home-screen/admin-home-screen/admin-home-screen.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { HomeComponent } from './home/home.component';
import { FinishedOrderComponent } from './order/finished-order/finished-order.component';
import { OrderdetailsComponent } from './order/orderdetails/orderdetails.component';
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
    path: 'shops/:shopid/order',
    component: OrderdetailsComponent
  },
  {
    path: 'shops/:shopid/order-details/:orderid',
    component: FinishedOrderComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeScreenComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
