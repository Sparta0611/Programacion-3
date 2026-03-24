import { Component, OnInit } from '@angular/core';
import {  areas_trabajo } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-areas_trabajo',
  templateUrl: './areas_trabajo.component.html',
  styleUrls: ['./areas_trabajo.component.css']
})

export class AreasTrabajoComponent implements OnInit {
  TUser: any = [];
  user: areas_trabajo = {
    idarea:  null ,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/areas_trabajo')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor() {
    delete this.user.idarea;
    this.Data.save(this.user, '/areas_trabajo').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err),
    );
  }
  EliminarData(id: number) {
    this.Data.delete(id, '/areas_trabajo')
    .subscribe(
      res => {
        this.getUser();
      },
      err => console.error(err),
    );
  }
} 

