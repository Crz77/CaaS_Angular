import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateScreenComponent } from './intermediate-screen.component';

describe('IntermediateScreenComponent', () => {
  let component: IntermediateScreenComponent;
  let fixture: ComponentFixture<IntermediateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediateScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
