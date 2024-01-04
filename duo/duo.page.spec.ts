import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuoPage } from './duo.page';

describe('DuoPage', () => {
  let component: DuoPage;
  let fixture: ComponentFixture<DuoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DuoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
