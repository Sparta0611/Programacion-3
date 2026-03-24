import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxcobrarEditComponent } from './cxcobrar-edit.component';

describe('CxcobrarEditComponent', () => {
  let component: CxcobrarEditComponent;
  let fixture: ComponentFixture<CxcobrarEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CxcobrarEditComponent]
    });
    fixture = TestBed.createComponent(CxcobrarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
