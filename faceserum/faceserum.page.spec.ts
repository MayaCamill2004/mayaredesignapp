import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaceserumPage } from './faceserum.page';

describe('FaceserumPage', () => {
  let component: FaceserumPage;
  let fixture: ComponentFixture<FaceserumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FaceserumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
