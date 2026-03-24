import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleventaEditComponent } from './detalleventa-edit.component';

describe('DetalleventaEditComponent', () => {
  let component: DetalleventaEditComponent;
  let fixture: ComponentFixture<DetalleventaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleventaEditComponent]
    });
    fixture = TestBed.createComponent(DetalleventaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
