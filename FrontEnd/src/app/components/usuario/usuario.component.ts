import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  TUser: any = [];
  
  // Se usa 'any' para evitar errores de compilación si la interfaz 
  // 'usuario' todavía tiene la propiedad 'tipo' en lugar de 'idtpusuario'
  user: any = {
    userid: null,
    idempresa: null,
    idsuc: null,
    idemp: null,
    usuario: null,
    clave: null,
    idtpusuario: null, // Nombre exacto de la columna en la BD
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

  AgregarValor() {
    // Creamos una copia para no alterar el formulario visual
    const datosEnviar = { ...this.user };
    
    // Eliminamos el ID ya que es AUTO_INCREMENT en MySQL
    delete datosEnviar.userid;

    // Log para verificar en la consola del navegador antes de enviar
    console.log("Enviando datos al servidor:", datosEnviar);

    this.Data.save(datosEnviar, '/usuario').subscribe(
      (res) => {
        alert('Usuario registrado exitosamente');
        this.getUser(); // Recargar la lista
        this.resetForm(); // Limpiar campos
      },
      (err) => {
        console.error("Error desde el servidor:", err);
        alert('Error al guardar. Revisa la consola del backend.');
      }
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Seguro que desea inactivar este usuario?')) {
      this.Data.delete(id, '/usuario')
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
      userid: null,
      idempresa: null,
      idsuc: null,
      idemp: null,
      usuario: null,
      clave: null,
      idtpusuario: null,
      estado: 'Activo'
    };
  }
}