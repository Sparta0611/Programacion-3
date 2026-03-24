import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoVentaEditComponent } from './encabezado-venta-edit.component';

describe('EncabezadoVentaEditComponent', () => {
  let component: EncabezadoVentaEditComponent;
  let fixture: ComponentFixture<EncabezadoVentaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoVentaEditComponent]
    });
    fixture = TestBed.createComponent(EncabezadoVentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
