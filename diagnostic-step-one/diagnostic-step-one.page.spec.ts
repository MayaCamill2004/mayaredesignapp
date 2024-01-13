import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnosticStepOnePage } from './diagnostic-step-one.page';

describe('DiagnosticStepOnePage', () => {
  let component: DiagnosticStepOnePage;
  let fixture: ComponentFixture<DiagnosticStepOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiagnosticStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
