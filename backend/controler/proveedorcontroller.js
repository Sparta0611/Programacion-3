const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from proveedor', (err, proveedor) => {
            if (err) {
                res.json(err);
            }
            res.json(proveedor);
        });
    });
};

controller.edit = (req, res) => {

    const { idprov } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from proveedor where idprov=?', [idprov], (err, proveedor) => {
            res.json(proveedor[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into proveedor set?', [data], (err, proveedor) => {
            res.json(proveedor);
        });
    })
};

controller.update = (req, res) => {

    const { idprov } = req.params;
    const nuevo_proveedor = req.body;

    req.getConnection((err, conn) => {
        conn.query('update proveedor set ? where idprov =?', [nuevo_proveedor, idprov], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idprov } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE proveedor SET estado = "Inactivo" WHERE idprov = ?';
        
        conn.query(query, [idprov], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
