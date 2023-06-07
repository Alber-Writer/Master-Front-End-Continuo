import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavComponent } from './private-nav.component';

describe('PrivateNavComponent', () => {
  let component: PrivateNavComponent;
  let fixture: ComponentFixture<PrivateNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateNavComponent]
    });
    fixture = TestBed.createComponent(PrivateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
