const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const myConnection = require('express-myconnection');
const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000",
                    credentials: true
                }
            ]
        }
    }
};

app.use(cors(
    config.application.cors.server
));



// rutas backend
const emprsaRoutes = require('./rutas/empresa');
const sucursalesRoutes = require('./rutas/sucursales');
const proveedorRoutes = require('./rutas/proveedor');
const areas_trabajoRoutes = require('./rutas/areas_trabajo');
const empleadosRoutes = require('./rutas/empleados');
const tipousuarioRoutes = require('./rutas/tipousuario');
const usuarioRoutes = require('./rutas/usuario');
const tipoproductoRoutes = require('./rutas/tipoproducto');
const productoRoutes = require('./rutas/producto');
const formapagoRoutes = require('./rutas/formapago');
const encabezado_compraRoutes = require('./rutas/encabezado_compra');
const detalle_compraRoutes = require('./rutas/detalle_compra');
const encabezado_ventaRoutes = require('./rutas/encabezado_venta');
const detalleventaRoutes = require('./rutas/detalleventa');
const cxcobrarRoutes = require('./rutas/cxcobrar');
const cxpagarRoutes = require('./rutas/cxpagar');
const pagosRoutes = require('./rutas/pagos');
const clientesRoutes = require('./rutas/clientes');
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Minecraft0611',
    port: 3306,
    database: 'ventas'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

var bodyParser = require('body-parser');
// create application/json parser
app.use(bodyParser.json());

// rutas frontend
app.use('/api/clientes',clientesRoutes)
app.use('/api/empresa', emprsaRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/proveedor', proveedorRoutes);
app.use('/api/areas_trabajo', areas_trabajoRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/tipousuario', tipousuarioRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/tipoproducto', tipoproductoRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/encabezadoCompra', encabezado_compraRoutes);
app.use('/api/detalleCompra', detalle_compraRoutes);
app.use('/api/encabezadoVenta', encabezado_ventaRoutes);
app.use('/api/detalleVenta', detalleventaRoutes);
app.use('/api/cxcobrar', cxcobrarRoutes);
app.use('/api/cxpagar', cxpagarRoutes);
app.use('/api/pagos', pagosRoutes);

//inicializando el server
app.listen(app.get('port'), () => {
    console.log("PUERTO 3000");
});
