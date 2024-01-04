import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HydratingserumPage } from './hydratingserum.page';

describe('HydratingserumPage', () => {
  let component: HydratingserumPage;
  let fixture: ComponentFixture<HydratingserumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HydratingserumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
