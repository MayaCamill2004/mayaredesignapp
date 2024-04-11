import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkinageingPage } from './skinageing.page';

describe('SkinageingPage', () => {
  let component: SkinageingPage;
  let fixture: ComponentFixture<SkinageingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SkinageingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
