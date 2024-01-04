import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScalpPage } from './scalp.page';

describe('ScalpPage', () => {
  let component: ScalpPage;
  let fixture: ComponentFixture<ScalpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScalpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
