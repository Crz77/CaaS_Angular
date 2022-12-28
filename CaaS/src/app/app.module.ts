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
    AppbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
