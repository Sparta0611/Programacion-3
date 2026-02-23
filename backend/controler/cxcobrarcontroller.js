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
    req.getConnection((err, conn) => {
        conn.query('insert into cxcobrar set?', [data], (err, cxcobrar) => {
            res.json(cxcobrar);
        });
    })
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
    const {idcxc} = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from cxcobrar where idcxc =?', [idcxc], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
