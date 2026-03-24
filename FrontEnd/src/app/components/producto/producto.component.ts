import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  TUser: any = [];
  
  user: producto = {
    num_prod: null,
    idempresa: null,
    idsuc: null,
    idtpprod: null,
    descripcion: null,
    presentacion: null,
    marca: null,
    valor: null,
    precioventa: null,
    existencia: null,
    fecha_ingreso: null,
    fecha_actualiza: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/producto')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.num_prod;

    this.Data.save(datosEnviar as any, '/producto').subscribe(
      (res) => {
        alert('Producto registrado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Inactivar producto?')) {
      this.Data.delete(id, '/producto')
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
      num_prod: null,
      idempresa: null,
      idsuc: null,
      idtpprod: null,
      descripcion: null,
      presentacion: null,
      marca: null,
      valor: null,
      precioventa: null,
      existencia: null,
      fecha_ingreso: null,
      fecha_actualiza: null,
      estado: 'Activo'
    };
  }
}