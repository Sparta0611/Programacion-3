import { Component, OnInit } from '@angular/core';
import { cxcobrar } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-cxcobrar',
  templateUrl: './cxcobrar.component.html',
  styleUrls: ['./cxcobrar.component.css']
})
export class CxcobrarComponent implements OnInit {
  TUser: any = [];
  user: cxcobrar = {
    idcxc: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_venta: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    fecha_pago: null,
    estado: 'Pendiente'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/cxcobrar')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }
AgregarValor() {
  const datosEnviar = { ...this.user };
  
  // SOLO borramos el idcxc (que sí es el autoincremental de la llave primaria)
  delete datosEnviar.idcxc;

  // Ya NO borramos num_venta porque ahora lo pedimos en el HTML
  console.log("Enviando con num_venta:", datosEnviar.num_venta);

  this.Data.save(datosEnviar, '/cxcobrar').subscribe(
    (res) => {
      alert('Cobro guardado con éxito');
      this.getUser();
      this.resetForm();
    },
    (err) => {
      console.error(err);
      alert('Error al guardar: ' + (err.error.sqlError || 'Revisa los datos'));
    }
  );
}
resetForm() {
  this.user = {
    idcxc: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_venta: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    fecha_pago: null,
    estado: 'Pendiente'
  };
}
  EliminarData(id: number) {
    this.Data.delete(id, '/cxcobrar')
    .subscribe(
      res => {
        this.getUser();
      },
      err => console.error(err),
    );
  }
}