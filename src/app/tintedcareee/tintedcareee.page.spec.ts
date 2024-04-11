import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TintedcareeePage } from './tintedcareee.page';

describe('TintedcareeePage', () => {
  let component: TintedcareeePage;
  let fixture: ComponentFixture<TintedcareeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TintedcareeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
