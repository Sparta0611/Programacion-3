import { Component, OnInit } from '@angular/core';
import { proveedor } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  TUser: any = [];
  
  user: proveedor = {
    idprov: null,
    idempresa: null,
    proveedor: null,
    direccion: null,
    telefono: null,
    responsable: null,
    fecha_creacion: null,
    observaciones: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Proveedor')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idprov;

    this.Data.save(datosEnviar, '/proveedor').subscribe(
      (res) => {
        alert('Proveedor registrado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Inactivar proveedor?')) {
      this.Data.delete(id, '/proveedor')
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
      idprov: null,
      idempresa: null,
      proveedor: null,
      direccion: null,
      telefono: null,
      responsable: null,
      fecha_creacion: null,
      observaciones: null,
      estado: 'Activo'
    };
  }
}