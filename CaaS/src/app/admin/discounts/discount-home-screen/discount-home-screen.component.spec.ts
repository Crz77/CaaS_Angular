import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountHomeScreenComponent } from './discount-home-screen.component';

describe('DiscountHomeScreenComponent', () => {
  let component: DiscountHomeScreenComponent;
  let fixture: ComponentFixture<DiscountHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
