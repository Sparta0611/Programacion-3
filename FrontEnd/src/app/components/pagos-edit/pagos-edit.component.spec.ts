import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosEditComponent } from './pagos-edit.component';

describe('PagosEditComponent', () => {
  let component: PagosEditComponent;
  let fixture: ComponentFixture<PagosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosEditComponent]
    });
    fixture = TestBed.createComponent(PagosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
