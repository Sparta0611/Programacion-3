const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from cxcobrar', (err, cxcobrar) => {
            if (err) {
                res.json(err);
            }
            res.json(cxcobrar);
        });
    });
};

controller.edit = (req, res) => {

    const {idcxc} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from cxcobrar where idcxc=?', [idcxc], (err, cxcobrar) => {
            res.json(cxcobrar[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    
    // 1. Ver exactamente qué está llegando desde Angular
    console.log("--- INTENTO DE GUARDAR EN CXCOBRAR ---");
    console.log("Datos recibidos:", data);

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error de conexión a la DB:", err);
            return res.status(500).json(err);
        }

        // 2. Ejecutar el INSERT con manejo de errores detallado
        conn.query('INSERT INTO cxcobrar SET ?', [data], (err, result) => {
            if (err) {
                // ESTO ES LO QUE BUSCAMOS: El error real de MySQL
                console.error("¡ERROR DE MYSQL AL INSERTAR!");
                console.error("Código de error:", err.code);
                console.error("Mensaje:", err.sqlMessage);
                
                // Le enviamos el error al frontend para que no crea que todo salió bien
                return res.status(500).json({
                    status: 'error',
                    message: 'No se pudo guardar en la base de datos',
                    sqlError: err.sqlMessage
                });
            }
            
            // Si llega aquí, es porque realmente se guardó
            console.log("SUCCES: Registro guardado con el ID:", result.insertId);
            res.json({
                status: 'success',
                message: 'Cobro guardado correctamente',
                id: result.insertId
            });
        });
    });
};

controller.update = (req, res) => {

    const {idcxc} = req.params;
    const nuevo_cxcobrar = req.body;

    req.getConnection((err, conn) => {
        conn.query('update cxcobrar set ? where idcxc =?', [nuevo_cxcobrar, idcxc], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idcxc } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE cxcobrar SET estado = "Inactivo" WHERE idcxc = ?';
        
        conn.query(query, [idcxc], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
