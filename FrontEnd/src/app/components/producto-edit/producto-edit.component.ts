import { Component, OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  // Cambiamos el tipo a 'any' para evitar el error de asignación de null
  user: any = {
    num_prod: null,
    idempresa: null,
    idsuc: null,
    idtpprod: null,
    descripcion: null,
    presentacion: null,
    marca: null,
    valor: null,
    precioventa: null,
    existencia: null,
    fecha_ingreso: null,
    fecha_actualiza: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.Data.getOne(params['id'],'/producto')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    // Ahora 'this.user' pasará sin errores de tipo
    this.Data.update(this.user.num_prod!, this.user,'/producto')
      .subscribe(
        res => {
          this.router.navigate(['/producto']);
        },
        err => console.error(err)
      );
  }  
}