import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/entities/cart';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { Category } from 'src/app/shared/entities/category';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { CartItemService } from 'src/app/shared/services/cart-item.service';
import { CartStoreService } from 'src/app/shared/services/cart-store.service';
import { CategoryStoreService } from 'src/app/shared/services/category-store.service';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})

export class ProductDetailsComponent implements OnInit {
  @Input() shop: Shop = new Shop();  
  @Input() cart: Cart = new Cart();  
  @Input() product: Product = new Product(); 
  @Output() showListEvent = new EventEmitter<any>();
  rule: DiscountRule = new DiscountRule();
  action: DiscountAction = new DiscountAction();

  discounts = false;
  quantityDiscount = false;
  dateDiscount = false;
  fixedAmount = false;
  percentageAmount = false;

  constructor(
    private route: ActivatedRoute,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService, 
    private cartItemService: CartItemService,
    private cartStoreService: CartStoreService,
    private localStorageService: LocalStorageService,
    private discountRuleStoreService: DiscountRuleStoreService,
    private discountActionStoreService: DiscountActionStoreService,
    private router: Router
  ) { }


  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];
    const cartid = this.localStorageService.getCartId(shopid);

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);
    this.productStoreService.getProductById(shopid, productid).subscribe(res => {
      this.product = res;

      if(this.product.ruleID != null && this.product.actionID != null){
        this.discounts = true;

        this.discountRuleStoreService.getDiscountRule(shopid, this.product.ruleID)
                                     .subscribe(resRule => {
                                        this.rule = resRule

                                        if(this.rule.qtyRuleAmount != null)
                                          this.quantityDiscount = true;          
                                        else
                                          this.dateDiscount = true;
                                          const datepipe: DatePipe = new DatePipe('en-US')
                                          this.rule.timeRuleFrom = datepipe.transform(this.rule.timeRuleFrom, 'YYYY-MM-dd') as unknown as Date;
                                          this.rule.timeRuleTo = datepipe.transform(this.rule.timeRuleTo, 'YYYY-MM-dd') as unknown as Date;
                                      });  

        this.discountActionStoreService.getDiscountAction(shopid, this.product.actionID)
                                       .subscribe(resAction => {
                                          this.action = resAction
                                        
                                          if(this.action.fixedAmount != null)
                                            this.fixedAmount = true;
                                          else  
                                            this.percentageAmount = true;
                                            let easyReadPercentage = this.action.percentage as unknown as number;
                                            easyReadPercentage = easyReadPercentage * 100;
                                            this.action.percentage = easyReadPercentage.toString();
                                        });
      }
    });

    if(cartid != null)
      this.cartStoreService.getCartById(shopid, cartid).subscribe(res => this.cart = res);    
  }

  productsSelected(product: Product) {
    this.router.navigate(['../shops/'+ this.shop.shopID + 'products/' + this.product.productID], { relativeTo: this.route });
  }

  showProductList() {
    this.router.navigateByUrl("/shops/" + this.shop.shopID + "/products");
  } 

  addToCart() {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];
    const cartid = this.localStorageService.getCartId(shopid);

    if(cartid != null && this.product.price != null){
      let cartitem = new CartItem(shopid, productid, cartid, 1, this.product.price);
      
      this.cartItemService.createCartItemByShopId(shopid, cartid, cartitem)
                          .subscribe(res => this.cartStoreService.updateCart(shopid, cartid).subscribe());
    }  
  }

}
