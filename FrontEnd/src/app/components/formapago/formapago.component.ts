import { Component,OnInit } from '@angular/core';
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
    idfpago:  null ,
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
}

