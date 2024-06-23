import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLessonComponent } from './second-lesson.component';

describe('SecondLessonComponent', () => {
  let component: SecondLessonComponent;
  let fixture: ComponentFixture<SecondLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondLessonComponent]
    });
    fixture = TestBed.createComponent(SecondLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
