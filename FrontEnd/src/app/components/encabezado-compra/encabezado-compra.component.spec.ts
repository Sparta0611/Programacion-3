import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoCompraComponent } from './encabezado-compra.component';

describe('EncabezadoCompraComponent', () => {
  let component: EncabezadoCompraComponent;
  let fixture: ComponentFixture<EncabezadoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoCompraComponent]
    });
    fixture = TestBed.createComponent(EncabezadoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
