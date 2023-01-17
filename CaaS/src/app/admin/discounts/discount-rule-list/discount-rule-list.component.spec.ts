import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountRuleListComponent } from './discount-rule-list.component';

describe('DiscountRuleListComponent', () => {
  let component: DiscountRuleListComponent;
  let fixture: ComponentFixture<DiscountRuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountRuleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountRuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
