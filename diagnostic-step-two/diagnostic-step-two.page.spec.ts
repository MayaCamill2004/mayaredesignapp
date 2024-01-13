import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnosticStepTwoPage } from './diagnostic-step-two.page';

describe('DiagnosticStepTwoPage', () => {
  let component: DiagnosticStepTwoPage;
  let fixture: ComponentFixture<DiagnosticStepTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiagnosticStepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
