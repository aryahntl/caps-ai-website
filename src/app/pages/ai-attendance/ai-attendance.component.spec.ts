import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAttendanceComponent } from './ai-attendance.component';

describe('AiAttendanceComponent', () => {
  let component: AiAttendanceComponent;
  let fixture: ComponentFixture<AiAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
