import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewinPage } from './newin.page';

describe('NewinPage', () => {
  let component: NewinPage;
  let fixture: ComponentFixture<NewinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
