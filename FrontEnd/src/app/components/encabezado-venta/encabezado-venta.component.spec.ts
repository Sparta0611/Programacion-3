import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoVentaComponent } from './encabezado-venta.component';

describe('EncabezadoVentaComponent', () => {
  let component: EncabezadoVentaComponent;
  let fixture: ComponentFixture<EncabezadoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoVentaComponent]
    });
    fixture = TestBed.createComponent(EncabezadoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
