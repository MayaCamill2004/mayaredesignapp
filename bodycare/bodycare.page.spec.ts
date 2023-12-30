import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodycarePage } from './bodycare.page';

describe('BodycarePage', () => {
  let component: BodycarePage;
  let fixture: ComponentFixture<BodycarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BodycarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
