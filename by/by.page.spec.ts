import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByPage } from './by.page';

describe('ByPage', () => {
  let component: ByPage;
  let fixture: ComponentFixture<ByPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ByPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
