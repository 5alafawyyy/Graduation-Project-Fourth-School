import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstUnitComponent } from './first-unit.component';

describe('FirstUnitComponent', () => {
  let component: FirstUnitComponent;
  let fixture: ComponentFixture<FirstUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstUnitComponent]
    });
    fixture = TestBed.createComponent(FirstUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
