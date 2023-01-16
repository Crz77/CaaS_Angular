import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountActionComponent } from './discount-action.component';

describe('DiscountActionComponent', () => {
  let component: DiscountActionComponent;
  let fixture: ComponentFixture<DiscountActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
