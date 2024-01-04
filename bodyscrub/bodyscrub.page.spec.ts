import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyscrubPage } from './bodyscrub.page';

describe('BodyscrubPage', () => {
  let component: BodyscrubPage;
  let fixture: ComponentFixture<BodyscrubPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BodyscrubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
