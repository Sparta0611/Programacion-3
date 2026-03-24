import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxpagarEditComponent } from './cxpagar-edit.component';

describe('CxpagarEditComponent', () => {
  let component: CxpagarEditComponent;
  let fixture: ComponentFixture<CxpagarEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CxpagarEditComponent]
    });
    fixture = TestBed.createComponent(CxpagarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
