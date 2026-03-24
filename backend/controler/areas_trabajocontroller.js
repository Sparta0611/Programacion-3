const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from areas_trabajo', (err, areas_trabajo) => {
            if (err) {
                res.json(err);
            }
            res.json(areas_trabajo);
        });
    });
};

controller.edit = (req, res) => {

    const { idarea } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from areas_trabajo where idarea=?', [idarea], (err, areas_trabajo) => {
            res.json(areas_trabajo[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into areas_trabajo set?', [data], (err, areas_trabajo) => {
            res.json(areas_trabajo);
        });
    })
};

controller.update = (req, res) => {

    const { idarea } = req.params;
    const nueva_area_trabajo = req.body;

    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo set ? where idarea =?', [nueva_area_trabajo, idarea], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idarea } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE areas_trabajo SET estado = "Inactivo" WHERE idarea = ?';
        
        conn.query(query, [idarea], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
