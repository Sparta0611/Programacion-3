import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

import { AreasTrabajoComponent } from './components/areas-trabajo/areas-trabajo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TipousuarioComponent } from './components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TipoproductoComponent } from './components/tipoproducto/tipoproducto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormapagoComponent } from './components/formapago/formapago.component';
import { EncabezadoCompraComponent } from './components/encabezado-compra/encabezado-compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { EncabezadoVentaComponent } from './components/encabezado-venta/encabezado-venta.component';
import { DetalleventaComponent } from './components/detalleventa/detalleventa.component';
import { CxcobrarComponent } from './components/cxcobrar/cxcobrar.component';
import { CxpagarComponent } from './components/cxpagar/cxpagar.component';
import { PagosComponent } from './components/pagos/pagos.component';
const routes: Routes = [

  {
    path: 'empresa',
    component :EmpresaComponent
  }
  ,
  {
    path: 'sucursales',
    component :SucursalesComponent
  },
  {
    path: 'proveedor',
    component :ProveedorComponent
  }
  ,
  {
    path: 'areas-trabajo',
    component :AreasTrabajoComponent
  },
  {
    path: 'empleados',
    component :EmpleadosComponent
  },
  {
    path: 'tipousuario',
    component :TipousuarioComponent
  },
  {
    path: 'usuario',
    component :UsuarioComponent
  },
  {
    path: 'clientes',
    component :ClientesComponent
  },
  {
    path: 'tipoproducto',
    component :TipoproductoComponent
  },
  {
    path: 'producto',
    component :ProductoComponent
  },
  {
    path: 'formapago',
    component :FormapagoComponent
  },
  {
    path: 'encabezado-compra',
    component :EncabezadoCompraComponent
  },
  {
    path: 'detalle-compra',
    component :DetalleCompraComponent
  },
  {
    path: 'encabezado-venta',
    component :EncabezadoVentaComponent
  },
  {
    path: 'detalleventa',
    component :DetalleventaComponent
  },
  {
    path: 'cxcobrar',
    component :CxcobrarComponent
  },
  {
    path: 'cxpagar',
    component :CxpagarComponent
  },
  {
    path: 'pagos',
    component :PagosComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
