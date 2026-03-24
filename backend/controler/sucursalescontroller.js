const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from sucursales', (err, sucursales) => {
            if (err) {
                res.json(err);
            }
            res.json(sucursales);
        });
    });
};

controller.edit = (req, res) => {

    const { idsuc } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from sucursales where idsuc=?', [idsuc], (err, sucursales) => {
            res.json(sucursales[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into sucursales set?', [data], (err, sucursales) => {
            res.json(sucursales);
        });
    })
};

controller.update = (req, res) => {

    const { idsuc } = req.params;
    const nueva_sucursal = req.body;

    req.getConnection((err, conn) => {
        conn.query('update sucursales set ? where idsuc =?', [nueva_sucursal, idsuc], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idsuc } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE sucursales SET estado = "Inactivo" WHERE idsuc = ?';
        
        conn.query(query, [idsuc], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
