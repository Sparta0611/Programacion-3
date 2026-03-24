import { Component, OnInit } from '@angular/core';
import { formapago } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css']
})
export class FormapagoComponent implements OnInit {
  TUser: any = [];
  
  user: formapago = {
    idfpago: null,
    idempresa: null,
    formapago: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/formapago')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idfpago;

    this.Data.save(datosEnviar, '/formapago').subscribe(
      (res) => {
        alert('Forma de pago registrada');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea inactivar esta forma de pago?')) {
      this.Data.delete(id, '/formapago')
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
      idfpago: null,
      idempresa: null,
      formapago: null,
      estado: 'Activo'
    };
  }
}