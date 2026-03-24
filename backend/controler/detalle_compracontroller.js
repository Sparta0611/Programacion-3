const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from detalle_compra', (err, detalle_compra) => {
            if (err) {
                res.json(err);
            }
            res.json(detalle_compra);
        });
    });
};

controller.edit = (req, res) => {

    const {iddetcomp} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from detalle_compra where iddetcomp=?', [iddetcomp], (err, detalle_compra) => {
            res.json(detalle_compra[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into detalle_compra set?', [data], (err, detalle_compra) => {
            res.json(detalle_compra);
        });
    })
};

controller.update = (req, res) => {

    const {iddetcomp} = req.params;
    const nuevo_detalle_compra = req.body;

    req.getConnection((err, conn) => {
        conn.query('update detalle_compra set ? where iddetcomp =?', [nuevo_detalle_compra, iddetcomp], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { iddetcomp } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE detalle_compra SET estado = "Inactivo" WHERE iddetcomp = ?';
        
        conn.query(query, [iddetcomp], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
