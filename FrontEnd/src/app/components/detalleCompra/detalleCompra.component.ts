import { Component, OnInit } from '@angular/core';
import { detalleCompra } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-detalleCompra',
  templateUrl: './detalleCompra.component.html',
  styleUrls: ['./detalleCompra.component.css']
})
export class DetalleCompraComponent implements OnInit {
  TUser: any = [];
  
  user: detalleCompra = {
    iddetcomp: null,
    idempresa: null,
    idsuc: null,
    num_compra: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    subtotal: null,
    isv: null,
    total: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/detalleCompra')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.iddetcomp;

    this.Data.save(datosEnviar, '/detalleCompra').subscribe(
      (res) => {
        alert('Detalle guardado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Eliminar registro?')) {
      this.Data.delete(id, '/detalleCompra')
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
      iddetcomp: null,
      idempresa: null,
      idsuc: null,
      num_compra: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      subtotal: null,
      isv: null,
      total: null,
      estado: 'Activo'
    };
  }
}