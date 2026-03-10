import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { cxpagar } from 'src/app/interface/user';
@Component({
  selector: 'app-cxpagar',
  templateUrl: './cxpagar.component.html',
  styleUrls: ['./cxpagar.component.css']
})
export class CxpagarComponent implements OnInit {
  TUser: any = [];
  
  
  user: cxpagar = {
    idcxp: null,
    num_compra: null,
    idempresa: null,
    idsuc: null,
    idprov: null,
    userid: null,
    idfpago: null,
    fecha_compra: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    subtotal: null,
    isv: null,
    total: null,
    fecha_pago: null,
    estado: 'Pendiente'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/cxpagar')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }
}