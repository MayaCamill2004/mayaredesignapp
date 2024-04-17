import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewreviewsPage } from './viewreviews.page';

describe('ViewreviewsPage', () => {
  let component: ViewreviewsPage;
  let fixture: ComponentFixture<ViewreviewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
