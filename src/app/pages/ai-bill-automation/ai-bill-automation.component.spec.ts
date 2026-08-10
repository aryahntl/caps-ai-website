import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBillAutomationComponent } from './ai-bill-automation.component';

describe('AiBillAutomationComponent', () => {
  let component: AiBillAutomationComponent;
  let fixture: ComponentFixture<AiBillAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiBillAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiBillAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
