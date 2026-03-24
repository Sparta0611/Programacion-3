import { Component, OnInit } from '@angular/core';
import { encabezadoCompra } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-encabezado-compra',
  templateUrl: './encabezado-compra.component.html',
  styleUrls: ['./encabezado-compra.component.css']
})
export class EncabezadoCompraComponent implements OnInit {
  TUser: any = [];
  
  user: encabezadoCompra = {
    num_compra: null,
    idempresa: null,
    idsuc: null,
    idprov: null,
    userid: null,
    idfpago: null,
    fecha_compra: null, 
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/encabezadoCompra')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };


    this.Data.save(datosEnviar, '/encabezadoCompra').subscribe(
      (res) => {
        alert('Encabezado de compra guardado');
        this.getUser();
        this.resetForm();
      },
      (err) => {
        console.error(err);
        alert('Error al guardar: ' + (err.error.sqlError || 'Revisa los datos'));
      }
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea eliminar este registro?')) {
      this.Data.delete(id, '/encabezadoCompra')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err),
      );
    }
  }

  resetForm() {
    this.user = {
      num_compra: null,
      idempresa: null,
      idsuc: null,
      idprov: null,
      userid: null,
      idfpago: null,
      fecha_compra: null,
      estado: 'Activo'
    };
  }
}