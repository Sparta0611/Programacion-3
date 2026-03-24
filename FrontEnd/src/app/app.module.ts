import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AreasTrabajoComponent } from './components/areas_trabajo/areas_trabajo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TipousuarioComponent } from './components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TipoproductoComponent } from './components/tipoproducto/tipoproducto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormapagoComponent } from './components/formapago/formapago.component';
import { EncabezadoCompraComponent } from './components/encabezado-compra/encabezado-compra.component';
import { DetalleCompraComponent } from './components/detalleCompra/detalleCompra.component';
import { EncabezadoVentaComponent } from './components/encabezado-venta/encabezado-venta.component';
import { DetalleventaComponent } from './components/detalleventa/detalleventa.component';
import { CxcobrarComponent } from './components/cxcobrar/cxcobrar.component';
import { CxpagarComponent } from './components/cxpagar/cxpagar.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EmpresaEditComponent } from './components/empresa-edit/empresa-edit.component';
import { AreasTrabajoEditComponent } from './components/areas-trabajo-edit/areas-trabajo-edit.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { CxcobrarEditComponent } from './components/cxcobrar-edit/cxcobrar-edit.component';
import { CxpagarEditComponent } from './components/cxpagar-edit/cxpagar-edit.component';
import { DetalleCompraEditComponent } from './components/detalle-compra-edit/detalle-compra-edit.component';
import { DetalleventaEditComponent } from './components/detalleventa-edit/detalleventa-edit.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
import { EncabezadoCompraEditComponent } from './components/encabezado-compra-edit/encabezado-compra-edit.component';
import { EncabezadoVentaEditComponent } from './components/encabezado-venta-edit/encabezado-venta-edit.component';
import { FormapagoEditComponent } from './components/formapago-edit/formapago-edit.component';
import { PagosEditComponent } from './components/pagos-edit/pagos-edit.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProveedorEditComponent } from './components/proveedor-edit/proveedor-edit.component';
import { SucursalesEditComponent } from './components/sucursales-edit/sucursales-edit.component';
import { TipoproductoEditComponent } from './components/tipoproducto-edit/tipoproducto-edit.component';
import { TipousuarioEditComponent } from './components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    SucursalesComponent,
    ProveedorComponent,
    AreasTrabajoComponent,
    EmpleadosComponent,
    TipousuarioComponent,
    UsuarioComponent,
    ClientesComponent,
    TipoproductoComponent,
    ProductoComponent,
    FormapagoComponent,
    EncabezadoCompraComponent,
    DetalleCompraComponent,
    EncabezadoVentaComponent,
    DetalleventaComponent,
    CxcobrarComponent,
    CxpagarComponent,
    PagosComponent,
    NavegacionComponent,
    EmpresaEditComponent,
    AreasTrabajoEditComponent,
    ClientesEditComponent,
    CxcobrarEditComponent,
    CxpagarEditComponent,
    DetalleCompraEditComponent,
    DetalleventaEditComponent,
    EmpleadosEditComponent,
    EncabezadoCompraEditComponent,
    EncabezadoVentaEditComponent,
    FormapagoEditComponent,
    PagosEditComponent,
    ProductoEditComponent,
    ProveedorEditComponent,
    SucursalesEditComponent,
    TipoproductoEditComponent,
    TipousuarioEditComponent,
    UsuarioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,MatMenuModule,MatButtonModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
