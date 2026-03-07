import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxpagarComponent } from './cxpagar.component';

describe('CxpagarComponent', () => {
  let component: CxpagarComponent;
  let fixture: ComponentFixture<CxpagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CxpagarComponent]
    });
    fixture = TestBed.createComponent(CxpagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
