import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSettingsComponent } from './new-product-settings.component';

describe('NewProductSettingsComponent', () => {
  let component: NewProductSettingsComponent;
  let fixture: ComponentFixture<NewProductSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
