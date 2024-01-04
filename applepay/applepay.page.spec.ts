import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplepayPage } from './applepay.page';

describe('ApplepayPage', () => {
  let component: ApplepayPage;
  let fixture: ComponentFixture<ApplepayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApplepayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
