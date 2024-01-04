import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TintedcomplexionPage } from './tintedcomplexion.page';

describe('TintedcomplexionPage', () => {
  let component: TintedcomplexionPage;
  let fixture: ComponentFixture<TintedcomplexionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TintedcomplexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
