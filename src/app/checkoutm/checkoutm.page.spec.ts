import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutmPage } from './checkoutm.page';

describe('CheckoutmPage', () => {
  let component: CheckoutmPage;
  let fixture: ComponentFixture<CheckoutmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckoutmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
