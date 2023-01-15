import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductListItemComponent } from './admin-product-list-item.component';

describe('AdminProductListItemComponent', () => {
  let component: AdminProductListItemComponent;
  let fixture: ComponentFixture<AdminProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
