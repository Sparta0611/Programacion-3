const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from pagos', (err, pagos) => {
            if (err) {
                res.json(err);
            }
            res.json(pagos);
        });
    });
};

controller.edit = (req, res) => {

    const {idpago} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from pagos where idpago=?', [idpago], (err, pagos) => {
            res.json(pagos[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into pagos set?', [data], (err, pagos) => {
            res.json(pagos);
        });
    })
};

controller.update = (req, res) => {

    const {idpago} = req.params;
    const nuevo_pago = req.body;

    req.getConnection((err, conn) => {
        conn.query('update pagos set ? where idpago =?', [nuevo_pago, idpago], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idpago } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE pagos SET estado = "Inactivo" WHERE idpago = ?';
        
        conn.query(query, [idpago], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
