import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NightcarePage } from './nightcare.page';

describe('NightcarePage', () => {
  let component: NightcarePage;
  let fixture: ComponentFixture<NightcarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NightcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
