import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnosticStepThreePage } from './diagnostic-step-three.page';

describe('DiagnosticStepThreePage', () => {
  let component: DiagnosticStepThreePage;
  let fixture: ComponentFixture<DiagnosticStepThreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiagnosticStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
