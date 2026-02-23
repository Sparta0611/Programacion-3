const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from cxpagar', (err, cxpagar) => {
            if (err) {
                res.json(err);
            }
            res.json(cxpagar);
        });
    });
};

controller.edit = (req, res) => {

    const {idcxp} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from cxpagar where idcxp=?', [idcxp], (err, cxpagar) => {
            res.json(cxpagar[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into cxpagar set?', [data], (err, cxpagar) => {
            res.json(cxpagar);
        });
    })
};

controller.update = (req, res) => {

    const {idcxp} = req.params;
    const nuevo_cxpagar = req.body;

    req.getConnection((err, conn) => {
        conn.query('update cxpagar set ? where idcxp =?', [nuevo_cxpagar, idcxp], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const {idcxp} = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from cxpagar where idcxp =?', [idcxp], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
