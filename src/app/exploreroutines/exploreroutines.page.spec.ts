import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExploreroutinesPage } from './exploreroutines.page';

describe('ExploreroutinesPage', () => {
  let component: ExploreroutinesPage;
  let fixture: ComponentFixture<ExploreroutinesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExploreroutinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
