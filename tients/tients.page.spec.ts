import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TientsPage } from './tients.page';

describe('TientsPage', () => {
  let component: TientsPage;
  let fixture: ComponentFixture<TientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
