import { Component, OnInit } from '@angular/core';
import { tipousuario } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {
  TUser: any = [];
  
  user: tipousuario = {
    idtpusuario: null,
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

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idtpusuario;

    this.Data.save(datosEnviar, '/tipousuario').subscribe(
      (res) => {
        alert('Tipo de usuario registrado');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea inactivar este tipo de usuario?')) {
      this.Data.delete(id, '/tipousuario')
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
      idtpusuario: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };
  }
}