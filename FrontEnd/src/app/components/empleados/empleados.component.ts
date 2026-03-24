import { Component, OnInit } from '@angular/core';
import { empleados } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  TUser: any = [];
  
  user: empleados = {
    idemp: null,
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
    fecha_creacion: new Date().toISOString().split('T')[0] as any,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/empleados').subscribe(
      res => { this.TUser = res; }, 
      err => console.error(err)
    );
  }

  AgregarValor() {
    const datosEnviar = { ...this.user };
    delete datosEnviar.idemp;

    this.Data.save(datosEnviar, '/empleados').subscribe(
      (res) => {
        alert('Empleado guardado con éxito');
        this.getUser();
        this.resetForm();
      },
      (err) => console.error(err)
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Desea eliminar este empleado?')) {
      this.Data.delete(id, '/empleados').subscribe(
        res => { this.getUser(); }, 
        err => console.error(err)
      );
    }
  }


  setGenero(event: any) {
    const val = event.target.value;
    this.user.femenino = val === 'F';
    this.user.masculino = val === 'M';
  }

  setEstadoCivil(event: any) {
    const val = event.target.value;
    this.user.soltero = val === 'S';
    this.user.casado = val === 'C';
    this.user.unionlibre = val === 'U';
  }

  resetForm() {
    this.user = {
      idemp: null,
      idempresa: null,
      idsuc: null,
      idarea: null,
      identidad: null,
      fecha_nac: null,
      nombres: null,
      apellidos: null,
      femenino: false, // Cambiado de null a false
      masculino: false,
      soltero: false,
      casado: false,
      unionlibre: false,
      direccion: null,
      // Cambiamos el string por un objeto Date real para que no de error
      fecha_creacion: new Date(), 
      estado: 'Activo'
    };
  }}