import { Component,OnInit } from '@angular/core';
import {  empleados } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  TUser: any = [];
  user: empleados = {
    idemp:  null ,
    idempresa: null,
    idsuc: null,
    idarea: null,
    identidad: null,
    fecha_nac: null,
    nombres: null,
    apellidos: null,
    femenino: null,
    masculino: null,
    soltero: null,
    casado: null,
    unionlibre: null,
    direccion: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/empleados')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}
