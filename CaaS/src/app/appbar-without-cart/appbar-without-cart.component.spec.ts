import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarWithoutCartComponent } from './appbar-without-cart.component';

describe('AppbarWithoutCartComponent', () => {
  let component: AppbarWithoutCartComponent;
  let fixture: ComponentFixture<AppbarWithoutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarWithoutCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbarWithoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
