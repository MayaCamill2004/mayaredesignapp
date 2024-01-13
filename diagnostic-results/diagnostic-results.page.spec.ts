import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnosticResultsPage } from './diagnostic-results.page';

describe('DiagnosticResultsPage', () => {
  let component: DiagnosticResultsPage;
  let fixture: ComponentFixture<DiagnosticResultsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiagnosticResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
