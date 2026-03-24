import { Component, OnInit } from '@angular/core';
import { encabezadoVenta } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-encabezado-venta',
  templateUrl: './encabezado-venta.component.html',
  styleUrls: ['./encabezado-venta.component.css']
})
export class EncabezadoVentaComponent implements OnInit {
  TUser: any = [];
  
  user: encabezadoVenta = {
    num_venta: null,
    idempresa: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_venta: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/encabezadoVenta')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    // Creamos una copia para no afectar el formulario visual
    const datosEnviar = { ...this.user };
    
    // AL SER AUTO-INCREMENTAL: Eliminamos el campo para que la DB asigne el siguiente
    delete datosEnviar.num_venta; 

    this.Data.save(datosEnviar, '/encabezadoVenta').subscribe(
      (res) => {
        alert('Venta registrada con éxito');
        this.getUser(); // Recarga la tabla para ver el nuevo registro
        this.resetForm(); // Limpia el formulario
      },
      (err) => {
        console.error(err);
        alert('Error al guardar: ' + (err.error?.details || 'Revisa la consola'));
      }
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea inactivar esta venta?')) {
      this.Data.delete(id, '/encabezadoVenta')
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
      num_venta: null,
      idempresa: null,
      idsuc: null,
      num_clie: null,
      userid: null,
      idfpago: null,
      fecha_venta: null,
      estado: 'Activo'
    };
  }
}