import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacecarePage } from './facecare.page';

describe('FacecarePage', () => {
  let component: FacecarePage;
  let fixture: ComponentFixture<FacecarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacecarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
