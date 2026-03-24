const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from tipoproducto', (err, tipoproducto) => {
            if (err) {
                res.json(err);
            }
            res.json(tipoproducto);
        });
    });
};

controller.edit = (req, res) => {

    const {idtpprod} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from tipoproducto where idtpprod=?', [idtpprod], (err, tipoproducto) => {
            res.json(tipoproducto[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into tipoproducto set?', [data], (err, tipoproducto) => {
            res.json(tipoproducto);
        });
    })
};

controller.update = (req, res) => {

    const {idtpprod} = req.params;
    const nueva_tipoproducto = req.body;

    req.getConnection((err, conn) => {
        conn.query('update tipoproducto set ? where idtpprod =?', [nueva_tipoproducto, idtpprod], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idtpprod } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE tipoproducto SET estado = "Inactivo" WHERE idtpprod = ?';
        
        conn.query(query, [idtpprod], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;