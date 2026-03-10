import { Component,OnInit } from '@angular/core';
import {  tipousuario } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {
  TUser: any = [];
  user: tipousuario = {
    idtpusuario:  null ,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/tipousuario')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}