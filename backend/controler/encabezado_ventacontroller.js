const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from encabezado_venta', (err, encabezado_venta) => {
            if (err) return res.status(500).json(err);
            res.json(encabezado_venta);
        });
    });
};

controller.edit = (req, res) => {
    const { num_venta } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select * from encabezado_venta where num_venta=?', [num_venta], (err, encabezado_venta) => {
            if (err) return res.status(500).json(err);
            res.json(encabezado_venta[0]);
        });
    });
};

// ESTA ES LA FUNCIÓN QUE DEBES CAMBIAR PARA VER EL ERROR
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json(err);
        
        conn.query('insert into encabezado_venta set ?', [data], (err, result) => {
            if (err) {
                // ESTO APARECERÁ EN TU TERMINAL DE NODE.JS
                console.error("--- ERROR AL INSERTAR ---");
                console.error(err); 
                console.error("DATOS RECIBIDOS:", data);
                console.error("-------------------------");
                
                // Enviamos el error al Frontend para que sepas qué pasó
                return res.status(500).json({
                    error: "Error en base de datos",
                    details: err.sqlMessage,
                    code: err.code
                });
            }
            res.json(result);
        });
    });
};

controller.update = (req, res) => {
    const { num_venta } = req.params;
    const nuevo_encabezado_venta = req.body;
    req.getConnection((err, conn) => {
        conn.query('update encabezado_venta set ? where num_venta =?', [nuevo_encabezado_venta, num_venta], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { num_venta } = req.params;
    req.getConnection((err, conn) => {
        const query = 'UPDATE encabezado_venta SET estado = "Inactivo" WHERE num_venta = ?';
        conn.query(query, [num_venta], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};

module.exports = controller;