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
  
  // Nombres de celdas cambiados según tu imagen de la base de datos
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
}