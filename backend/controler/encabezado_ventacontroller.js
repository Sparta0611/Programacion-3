const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from encabezado_venta', (err, encabezado_venta) => {
            if (err) {
                res.json(err);
            }
            res.json(encabezado_venta);
        });
    });
};

controller.edit = (req, res) => {

    const {num_venta} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from encabezado_venta where num_venta=?', [num_venta], (err, encabezado_venta) => {
            res.json(encabezado_venta[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into encabezado_venta set?', [data], (err, encabezado_venta) => {
            res.json(encabezado_venta);
        });
    })
};

controller.update = (req, res) => {

    const {num_venta} = req.params;
    const nuevo_encabezado_venta = req.body;

    req.getConnection((err, conn) => {
        conn.query('update encabezado_venta set ? where num_venta =?', [nuevo_encabezado_venta, num_venta], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const {num_venta} = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from encabezado_venta where num_venta =?', [num_venta], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
