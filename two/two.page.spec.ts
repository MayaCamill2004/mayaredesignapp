import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoPage } from './two.page';

describe('TwoPage', () => {
  let component: TwoPage;
  let fixture: ComponentFixture<TwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
