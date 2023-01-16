import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopListItemComponent } from './shop/shop-list-item/shop-list-item.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ProductListItemComponent } from './product/product-list-item/product-list-item.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AppbarComponent } from './appbar/appbar.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { AppbarWithoutCartComponent } from './appbar-without-cart/appbar-without-cart.component';
import { CartItemListComponent } from './cart/cart-item-list/cart-item-list.component';
import { CartItemListItemComponent } from './cart/cart-item-list-item/cart-item-list-item.component';
import { OrderdetailsComponent } from './order/orderdetails/orderdetails.component';
import { FormsModule } from '@angular/forms';
import { DateValueAccessor } from 'angular-date-value-accessor';
import { FinishedOrderComponent } from './order/finished-order/finished-order.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdminHomeScreenComponent } from './admin/admin-home-screen/admin-home-screen.component';
import { AppbarAdminComponent } from './appbar-admin/appbar-admin.component';
import { IntermediateScreenComponent } from './admin/intermediate-screen/intermediate-screen.component';
import { ShopSettingsComponent } from './admin/shop-settings/shop-settings.component';
import { AdminProductListComponent } from './admin/products/admin-product-list/admin-product-list.component';
import { AdminProductListItemComponent } from './admin/products/admin-product-list-item/admin-product-list-item.component';
import { AdminProductSettingsComponent } from './admin/products/admin-product-settings/admin-product-settings.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { DiscountListComponent } from './admin/discounts/discount-list/discount-list.component';
import { DiscountRuleComponent } from './admin/discounts/discount-rule/discount-rule.component';
import { DiscountActionComponent } from './admin/discounts/discount-action/discount-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopListComponent,
    ShopListItemComponent,
    ShopDetailsComponent,
    ProductListComponent,
    ProductListItemComponent,
    SearchComponent,
    ProductDetailsComponent,
    AppbarComponent,
    CartDetailsComponent,
    AppbarWithoutCartComponent,
    CartItemListComponent,
    CartItemListItemComponent,
    OrderdetailsComponent,
    FinishedOrderComponent,
    AdminHomeScreenComponent,
    AppbarAdminComponent,
    IntermediateScreenComponent,
    ShopSettingsComponent,
    AdminProductListComponent,
    AdminProductListItemComponent,
    AdminProductSettingsComponent,
    StatisticsComponent,
    DiscountListComponent,
    DiscountRuleComponent,
    DiscountActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DateValueAccessor,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
