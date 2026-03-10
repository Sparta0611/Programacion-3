import { Component,OnInit } from '@angular/core';
import { encabezadoVenta } from 'src/app/interface/user';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-encabezado-venta',
  templateUrl: './encabezado-venta.component.html',
  styleUrls: ['./encabezado-venta.component.css']
})
export class EncabezadoVentaComponent implements OnInit {
  TUser: any = [];
  user: encabezadoVenta = {
    num_venta:  null ,
    idempresa: null,
    idsuc: null,
    num_clie: null ,
    userid:  null ,
    idfpago: null,
    fecha_venta: null,
    estado: 'Activo'
  }

    constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/encabezadoVenta')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}



