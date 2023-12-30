import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoisturizersPage } from './moisturizers.page';

describe('MoisturizersPage', () => {
  let component: MoisturizersPage;
  let fixture: ComponentFixture<MoisturizersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoisturizersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
