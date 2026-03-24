import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoCompraEditComponent } from './encabezado-compra-edit.component';

describe('EncabezadoCompraEditComponent', () => {
  let component: EncabezadoCompraEditComponent;
  let fixture: ComponentFixture<EncabezadoCompraEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoCompraEditComponent]
    });
    fixture = TestBed.createComponent(EncabezadoCompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
