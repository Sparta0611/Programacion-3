import { Component,OnInit } from '@angular/core';
import {  usuario } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  TUser: any = [];
  user: usuario = {
    userid:  null ,
    idempresa: null,
    idsuc: null,
    idemp: null,
    usuario:  null ,
    clave: null,
    tipo: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/usuario')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}
