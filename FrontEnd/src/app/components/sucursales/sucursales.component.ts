import { Component, OnInit} from '@angular/core';
import {  sucursales } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  TUser: any = [];
  user: sucursales = {
    idsuc:  null ,
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
  }}