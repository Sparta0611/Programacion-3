import { Component, OnInit } from '@angular/core';
import { detalleVenta } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-detalleventa',
  templateUrl: './detalleVenta.component.html',
  styleUrls: ['./detalleVenta.component.css']
})
export class DetalleventaComponent implements OnInit {
  TUser: any = [];
  
  user: detalleVenta = {
    iddetventa: null,
    idempresa: null,
    idsuc: null,
    num_clie: null,
    num_venta: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/detalleVenta')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.iddetventa;

    this.Data.save(datosEnviar, '/detalleVenta').subscribe(
      (res) => {
        alert('Detalle de venta guardado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Eliminar detalle?')) {
      this.Data.delete(id, '/detalleVenta')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
    }
  }

  resetForm() {
    this.user = {
      iddetventa: null,
      idempresa: null,
      idsuc: null,
      num_clie: null,
      num_venta: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      isv: null,
      descuento: null,
      total: null,
      estado: 'Activo'
    };
  }
}