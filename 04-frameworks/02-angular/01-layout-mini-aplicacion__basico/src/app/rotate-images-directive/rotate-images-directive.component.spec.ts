import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateImagesDirectiveComponent } from './rotate-images-directive.component';

describe('RotateImagesDirectiveComponent', () => {
  let component: RotateImagesDirectiveComponent;
  let fixture: ComponentFixture<RotateImagesDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotateImagesDirectiveComponent]
    });
    fixture = TestBed.createComponent(RotateImagesDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
