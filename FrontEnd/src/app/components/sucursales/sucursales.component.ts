import { Component, OnInit } from '@angular/core';
import { sucursales } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  TUser: any = [];
  
  user: sucursales = {
    idsuc: null,
    idempresa: null,
    sucursal: null,
    dirsuc: null,
    telefono: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/sucursales')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idsuc;

    this.Data.save(datosEnviar, '/sucursales').subscribe(
      (res) => {
        alert('Sucursal registrada');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Inactivar sucursal?')) {
      this.Data.delete(id, '/sucursales')
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
      idsuc: null,
      idempresa: null,
      sucursal: null,
      dirsuc: null,
      telefono: null,
      estado: 'Activo'
    };
  }
}