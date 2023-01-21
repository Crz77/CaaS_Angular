import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountAction } from 'src/app/shared/entities/discount-action';
import { DiscountRule } from 'src/app/shared/entities/discount-rule';
import { Product } from 'src/app/shared/entities/product';
import { Shop } from 'src/app/shared/entities/shop';
import { DiscountActionStoreService } from 'src/app/shared/services/discount-action-store.service';
import { DiscountRuleStoreService } from 'src/app/shared/services/discount-rule-store.service';
import { ProductStoreService } from 'src/app/shared/services/product-store.service';
import { ShopStoreService } from 'src/app/shared/services/shop-store.service';

@Component({
  selector: 'wea5-admin-product-settings',
  templateUrl: './admin-product-settings.component.html',
  styles: [
  ]
})

export class AdminProductSettingsComponent implements OnInit {
  product: Product = new Product();
  shop: Shop = new Shop();
  rule: DiscountRule = new DiscountRule();
  rules: DiscountRule[] = [];
  action: DiscountAction = new DiscountAction();
  actions: DiscountAction[] = [];

  @ViewChild('productForm', {static: true}) productForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopStoreService: ShopStoreService,
    private productStoreService: ProductStoreService,
    private discountRuleService: DiscountRuleStoreService,
    private discountActionService: DiscountActionStoreService
  ) { }

  ngOnInit(): void {
    const shopid = this.route.snapshot.params['shopid'];
    const productid = this.route.snapshot.params['productid'];

    this.shopStoreService.getShopById(shopid).subscribe(res => this.shop = res);
    this.productStoreService.getProductById(shopid, productid).subscribe(res => {
      this.product = res;

      if(this.product.ruleID != null)
        this.discountRuleService.getDiscountRule(shopid, this.product.ruleID).subscribe(resRule => this.rule = resRule);
      

      if(this.product.actionID != null)
        this.discountActionService.getDiscountAction(shopid, this.product.actionID).subscribe(resAction => this.action = resAction);
    });

    this.discountRuleService.getAllDiscountRules(shopid).subscribe(res => this.rules = res);
    this.discountActionService.getAllDiscountActions(shopid).subscribe(res => this.actions = res);

    (<any>$('.selection.dropdown')).dropdown();    
  }

  updateProduct() {
    this.product.productName = this.productForm.value.productName;
    this.product.description = this.productForm.value.description;
    this.product.link = this.productForm.value.link;
    this.product.price = this.productForm.value.price;
    this.product.picture = this.productForm.value.picture;

    if(this.rule.ruleName != null && this.action.actionID != null){
      this.rules.forEach(r => {
        if(this.rule.ruleName == r.ruleName)
          this.rule = r;
      });

      this.product.ruleID = this.rule.ruleID;
      this.product.actionID = this.action.actionID;
    }

    if(this.product.shopID != null && this.product.productID != null && this.product.categoryID != null && this.shop.appKey!=null)
      this.productStoreService.updateProduct(this.product.shopID, this.product.productID, this.product.categoryID,
                                             this.product, this.shop.appKey).subscribe();

    window.location.reload();
  }

  deleteProduct(){
    if(this.shop.shopID != null && this.product.productID != null && this.shop.appKey != null)
      this.productStoreService.deleteProduct(this.shop.shopID, this.product.productID, this.shop.appKey).subscribe();

    this.router.navigateByUrl("/admin/" + this.shop.shopID + "/products");
  }

  onChangeRule(x: any) {
    this.rule.ruleName = x.target.value; 
  }

  onChangeAction(x: any) {
    this.action.actionID = x.target.value; 
  }


 
}
