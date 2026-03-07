import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxcobrarComponent } from './cxcobrar.component';

describe('CxcobrarComponent', () => {
  let component: CxcobrarComponent;
  let fixture: ComponentFixture<CxcobrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CxcobrarComponent]
    });
    fixture = TestBed.createComponent(CxcobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
