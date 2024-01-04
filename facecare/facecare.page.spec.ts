import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaceCarePage } from './facecare.page';

describe('FaceCarePage', () => {
  let component: FaceCarePage;
  let fixture: ComponentFixture<FaceCarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FaceCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
