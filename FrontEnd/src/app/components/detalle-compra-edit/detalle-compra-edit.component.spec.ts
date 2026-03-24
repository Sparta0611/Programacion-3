import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompraEditComponent } from './detalle-compra-edit.component';

describe('DetalleCompraEditComponent', () => {
  let component: DetalleCompraEditComponent;
  let fixture: ComponentFixture<DetalleCompraEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCompraEditComponent]
    });
    fixture = TestBed.createComponent(DetalleCompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
