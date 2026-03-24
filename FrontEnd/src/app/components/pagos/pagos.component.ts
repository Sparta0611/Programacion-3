import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { pagos } from 'src/app/interface/user';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  TUser: any = [];

  user: pagos = {
    idpago: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_pago: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    estado: 'Aplicado'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/pagos')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idpago;

    this.Data.save(datosEnviar, '/pagos').subscribe(
      (res) => {
        alert('Pago registrado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Inactivar registro?')) {
      this.Data.delete(id, '/pagos')
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
      idpago: null,
      idempresa: null,
      num_venta: null,
      idsuc: null,
      num_clie: null,
      userid: null,
      idfpago: null,
      fecha_pago: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      isv: null,
      descuento: null,
      total: null,
      estado: 'Aplicado'
    };
  }
}