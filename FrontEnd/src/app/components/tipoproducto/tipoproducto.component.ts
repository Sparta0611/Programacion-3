import { Component, OnInit } from '@angular/core';
import { tipoproducto } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent implements OnInit {
  TUser: any = [];
  
  user: tipoproducto = {
    idtpprod: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/tipoproducto')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idtpprod;

    this.Data.save(datosEnviar, '/tipoproducto').subscribe(
      (res) => {
        alert('Tipo de producto registrado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea inactivar este registro?')) {
      this.Data.delete(id, '/tipoproducto')
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
      idtpprod: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };
  }
}