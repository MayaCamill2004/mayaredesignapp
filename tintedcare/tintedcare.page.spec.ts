import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TintedcarePage } from './tintedcare.page';

describe('TintedcarePage', () => {
  let component: TintedcarePage;
  let fixture: ComponentFixture<TintedcarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TintedcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
