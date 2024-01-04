import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowersPage } from './showers.page';

describe('ShowersPage', () => {
  let component: ShowersPage;
  let fixture: ComponentFixture<ShowersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
