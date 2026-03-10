import { Component, OnInit } from '@angular/core';
import {  empresa } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  TUser: any = [];
  user: empresa = {
    idempresa:  null ,
    nombre: null,
    direccion: null,
    rtn: null,
    telefono: null,
    correo: null,
    contacto: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/empresa')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}


