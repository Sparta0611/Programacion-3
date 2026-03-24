import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { cxpagar } from 'src/app/interface/user';

@Component({
  selector: 'app-cxpagar',
  templateUrl: './cxpagar.component.html',
  styleUrls: ['./cxpagar.component.css']
})
export class CxpagarComponent implements OnInit {
  TUser: any = [];
  
  // Objeto inicial con la estructura de cxpagar
  user: cxpagar = {
    idcxp: null,
    num_compra: null,
    idempresa: null,
    idsuc: null,
    idprov: null,
    userid: null,
    idfpago: null,
    fecha_compra: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    subtotal: null,
    isv: null,
    total: null,
    fecha_pago: null,
    estado: 'Pendiente'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/cxpagar')
      .subscribe(
        res => {
          this.TUser = res;
        }, 
        err => console.error('Error al obtener datos:', err)
      );
  }

  AgregarValor() {
    // Creamos una copia para no afectar el formulario visualmente mientras se envía
    const datosEnviar = { ...this.user };
    
    // Eliminamos solo el ID primario autoincremental
    delete datosEnviar.idcxp;

    // Validación simple de fechas para evitar el error ER_TRUNCATED_WRONG_VALUE
    if (datosEnviar.fecha_compra && isNaN(Date.parse(datosEnviar.fecha_compra.toString()))) {
      alert('Fecha de compra no válida. Asegúrate de ingresar una fecha correcta.');
      return;
    }
    if (datosEnviar.fecha_pago && isNaN(Date.parse(datosEnviar.fecha_pago.toString()))) {
      alert('Fecha de pago no válida. Asegúrate de ingresar una fecha correcta.');
      return;
    }

    this.Data.save(datosEnviar, '/cxpagar').subscribe(
      (res) => {
        alert('Cuenta por pagar registrada con éxito');
        this.getUser();   // Recargar la lista
        this.resetForm(); // LIMPIAR EL FORMULARIO
      },
      (err) => {
        console.error('Error al guardar:', err);
        alert('Error: No se pudo guardar. Revisa la consola del backend.');
      }
    );
  }

  EliminarData(id: number) {
    if(confirm('¿Estás seguro de eliminar este registro?')) {
      this.Data.delete(id, '/cxpagar')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
    }
  }

  // FUNCIÓN PARA REINICIAR EL FORMULARIO
  resetForm() {
    this.user = {
      idcxp: null,
      num_compra: null,
      idempresa: null,
      idsuc: null,
      idprov: null,
      userid: null,
      idfpago: null,
      fecha_compra: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      subtotal: null,
      isv: null,
      total: null,
      fecha_pago: null,
      estado: 'Pendiente'
    };
  }
}