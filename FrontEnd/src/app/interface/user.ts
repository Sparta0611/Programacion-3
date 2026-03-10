export interface empresa{
    idempresa?: number | null;
    nombre?: string | null;
    direccion?: string | null;
    rtn?: string | null;
    telefono?: string | null;
    correo?: string | null;
    contacto?: string | null;
    fecha_creacion?: Date | null;
    estado?: string;
}
export interface sucursales{
    idsuc?: number | null;
    idempresa?: number | null;
    sucursal?: string | null;
    dirsuc?: string | null;
    telefono?: string | null;
    estado?: string | null;
}
export interface proveedor{
    idprov?: number | null;
    idempresa?: number | null;
    proveedor?: string | null;
    direccion?: string | null;
    telefono?: string | null;
    responsable?: string | null;
    fecha_creacion?: Date | null;
    observaciones?: string | null;
    estado?: string | null;
}
export interface areas_trabajo{
    idarea?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    area?: string | null;
    fecha_creacion?: Date | null;
    estado?: string | null;
}
export interface empleados{
    idemp?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    idarea?: number | null;
    identidad?: string | null;
    fecha_nac?: Date | null;
    nombres?: string | null;
    apellidos?: string | null;
    femenino?: boolean | null;
    masculino?: boolean | null;
    soltero?: boolean | null;
    casado?: boolean | null;
    unionlibre?: boolean | null;
    direccion?: string | null;
    fecha_creacion?: Date | null;
    estado?: string | null;
}
export interface tipousuario{
    idtpusuario?: number | null;
    idempresa?: number | null;
    tipo?: string | null;
    estado?: string | null;
}
export interface usuario{
    userid?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    idtpusuario?: number | null;
    idemp?: number | null;
    usuario?: string | null;
    clave?: string | null;
    tipo?: string | null;
    estado?: string | null;
}
export interface clientes{
    num_clie?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    identidad?: string | null;
    rtn?: string | null;
    fecha_nac?: Date | null;
    nombre?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    correo?: string | null;
    fecha_creacion?: Date | null;
    estado?: string | null;
} 
export interface tipoproducto{
    idtpprod?: number | null;
    idempresa?: number | null;
    tipo?: string | null;
    estado?: string | null;
}
export interface producto{
    num_prod?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    idtpprod?: number | null;
    descripcion?: string | null;
    presentacion?: string | null;
    marca?: string | null;
    valor?: number | null;
    precioventa?: number | null;
    existencia?: number | null;
    fecha_ingreso?: Date | null;
    fecha_actualiza?: Date | null;
    estado?: string | null;
}
export interface formapago{
    idfpago?: number | null;
    idempresa?: number | null;
    formapago?: string | null;
    estado?: string | null;
}
export interface encabezadoCompra{
    num_compra?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    idprov?: number | null;
    userid?: number | null;
    idfpago?: number | null;
    fecha_compra?: Date | null;
    estado?: string | null;
}
export interface detalleCompra{
    iddetcomp?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    num_compra?: number | null;
    num_prod?: number | null;
    cantidad?: number | null;
    precio?: number | null;
    subtotal?: number | null;
    isv?: number | null;
    total?: number | null;
    estado?: string | null;
}
export interface encabezadoVenta{
    num_venta?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    num_clie?: number | null;
    userid?: number | null;
    idfpago?: number | null;
    fecha_venta?: Date | null;
    estado?: string | null;
}
export interface detalleVenta{
    iddetventa?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    num_clie?: number | null;
    num_venta?: number | null;
    num_prod?: number | null;
    cantidad?: number | null;
    precio?: number | null;
    isv?: number | null;
    descuento?: number | null;
    total?: number | null;
    estado?: string | null;
}
export interface cxcobrar{
    idcxc?: number | null;
    idempresa?: number | null;
    num_venta?: number | null;
    idsuc?: number | null;
    num_clie?: number | null;
    userid?: number | null;
    idfpago?: number | null;
    fecha_venta?: Date | null;
    num_prod?: number | null;
    cantidad?: number | null;
    precio?: number | null;
    isv?: number | null;
    descuento?: number | null;
    total?: number | null;
    fecha_pago?: Date | null;
    estado?: string | null;
}
export interface cxpagar{
    idcxp?: number | null;
    num_compra?: number | null;
    idempresa?: number | null;
    idsuc?: number | null;
    idprov?: number | null;
    userid?: number | null;
    idfpago?: number | null;
    fecha_compra?: Date | null;
    num_prod?: number | null;
    cantidad?: number | null;
    precio?: number | null;
    subtotal?: number | null;
    isv?: number | null;
    total?: number | null;
    fecha_pago?: Date | null;
    estado?: string | null;
}
export interface pagos{
    idpago?: number | null;
    idempresa?: number | null;
    num_venta?: number | null;
    idsuc?: number | null;
    num_clie?: number | null;
    userid?: number | null;
    idfpago?: number | null;
    fecha_pago?: Date | null;
    num_prod?: number | null;
    cantidad?: number | null;
    precio?: number | null;
    isv?: number | null;
    descuento?: number | null;
    total?: number | null;
    estado?: string | null;
}
