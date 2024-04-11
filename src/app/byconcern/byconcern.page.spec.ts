import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByconcernPage } from './byconcern.page';

describe('ByconcernPage', () => {
  let component: ByconcernPage;
  let fixture: ComponentFixture<ByconcernPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ByconcernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
