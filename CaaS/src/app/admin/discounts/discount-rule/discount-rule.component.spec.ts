import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountRuleComponent } from './discount-rule.component';

describe('DiscountRuleComponent', () => {
  let component: DiscountRuleComponent;
  let fixture: ComponentFixture<DiscountRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
