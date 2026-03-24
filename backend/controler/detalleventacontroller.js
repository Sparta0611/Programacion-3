const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from detalleventa', (err, detalleventa) => {
            if (err) {
                res.json(err);
            }
            res.json(detalleventa);
        });
    });
};

controller.edit = (req, res) => {

    const {iddetventa} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from detalleventa where iddetventa=?', [iddetventa], (err, detalleventa) => {
            res.json(detalleventa[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into detalleventa set?', [data], (err, detalleventa) => {
            res.json(detalleventa);
        });
    })
};

controller.update = (req, res) => {

    const {iddetventa} = req.params;
    const nuevo_detalleventa = req.body;

    req.getConnection((err, conn) => {
        conn.query('update detalleventa set ? where iddetventa =?', [nuevo_detalleventa, iddetventa], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { iddetventa } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE detalleventa SET estado = "Inactivo" WHERE iddetventa = ?';
        
        conn.query(query, [iddetventa], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
