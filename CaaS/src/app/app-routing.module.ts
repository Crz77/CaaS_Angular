import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeScreenComponent } from './admin/admin-home-screen/admin-home-screen.component';
import { DiscountActionListComponent } from './admin/discounts/discount-action-list/discount-action-list.component';
import { DiscountHomeScreenComponent } from './admin/discounts/discount-home-screen/discount-home-screen.component';
import { DiscountRuleListComponent } from './admin/discounts/discount-rule-list/discount-rule-list.component';
import { DiscountRuleComponent } from './admin/discounts/discount-rule/discount-rule.component';
import { IntermediateScreenComponent } from './admin/intermediate-screen/intermediate-screen.component';
import { AdminProductListComponent } from './admin/products/admin-product-list/admin-product-list.component';
import { AdminProductSettingsComponent } from './admin/products/admin-product-settings/admin-product-settings.component';
import { ShopSettingsComponent } from './admin/shop-settings/shop-settings.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { HomeComponent } from './home/home.component';
import { FinishedOrderComponent } from './order/finished-order/finished-order.component';
import { OrderdetailsComponent } from './order/orderdetails/orderdetails.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: 'index.html',
    redirectTo: 'intermediate-screen',
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
    path: 'admin/:shopid',
    component: AdminHomeScreenComponent
  },
  {
    path: 'intermediate-screen',
    component: IntermediateScreenComponent
  },
  {
    path: 'admin/:shopid/shop-settings',
    component: ShopSettingsComponent
  },
  {
    path: 'admin/:shopid/products',
    component: AdminProductListComponent
  },
  {
    path: 'admin/:shopid/products/:productid',
    component: AdminProductSettingsComponent
  },
  {
    path: 'admin/:shopid/statistics',
    component: StatisticsComponent
  },
  {
    path: 'admin/:shopid/discounts',
    component: DiscountHomeScreenComponent
  },
  {
    path: 'admin/:shopid/discounts/rules',
    component: DiscountRuleListComponent
  },
  {
    path: 'admin/:shopid/discounts/actions',
    component: DiscountActionListComponent
  }  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
