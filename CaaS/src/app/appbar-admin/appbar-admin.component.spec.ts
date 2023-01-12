import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarAdminComponent } from './appbar-admin.component';

describe('AppbarAdminComponent', () => {
  let component: AppbarAdminComponent;
  let fixture: ComponentFixture<AppbarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
