import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductSettingsComponent } from './admin-product-settings.component';

describe('AdminProductSettingsComponent', () => {
  let component: AdminProductSettingsComponent;
  let fixture: ComponentFixture<AdminProductSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
