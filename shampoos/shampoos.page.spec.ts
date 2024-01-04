import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShampoosPage } from './shampoos.page';

describe('ShampoosPage', () => {
  let component: ShampoosPage;
  let fixture: ComponentFixture<ShampoosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShampoosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
