import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadianceserumPage } from './radianceserum.page';

describe('RadianceserumPage', () => {
  let component: RadianceserumPage;
  let fixture: ComponentFixture<RadianceserumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RadianceserumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
