import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressBookPage } from './address-book.page';

describe('AddressBookPage', () => {
  let component: AddressBookPage;
  let fixture: ComponentFixture<AddressBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddressBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
