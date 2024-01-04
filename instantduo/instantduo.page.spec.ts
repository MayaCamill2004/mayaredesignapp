import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstantduoPage } from './instantduo.page';

describe('InstantduoPage', () => {
  let component: InstantduoPage;
  let fixture: ComponentFixture<InstantduoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstantduoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
