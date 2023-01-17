import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountActionListComponent } from './discount-action-list.component';

describe('DiscountActionListComponent', () => {
  let component: DiscountActionListComponent;
  let fixture: ComponentFixture<DiscountActionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountActionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
