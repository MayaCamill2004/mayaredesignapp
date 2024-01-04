import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TannedPage } from './tanned.page';

describe('TannedPage', () => {
  let component: TannedPage;
  let fixture: ComponentFixture<TannedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TannedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
