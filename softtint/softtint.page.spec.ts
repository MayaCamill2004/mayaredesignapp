import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SofttintPage } from './softtint.page';

describe('SofttintPage', () => {
  let component: SofttintPage;
  let fixture: ComponentFixture<SofttintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SofttintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
