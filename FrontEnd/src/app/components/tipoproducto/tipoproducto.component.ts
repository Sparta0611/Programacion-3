import { Component,OnInit } from '@angular/core';
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
    idtpprod:  null ,
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
}

