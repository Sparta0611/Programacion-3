const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from tipousuario', (err, tipousuario) => {
            if (err) {
                res.json(err);
            }
            res.json(tipousuario);
        });
    });
};

controller.edit = (req, res) => {

    const {idtpusuario} = req.params;

    req.getConnection((err, conn) => {
        conn.query('select *from tipousuario where idtpusuario=?', [idtpusuario], (err, tipousuario) => {
            res.json(tipousuario[0]);

        });

    });

};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into tipousuario set?', [data], (err, tipousuario) => {
            res.json(tipousuario);
        });
    })
};

controller.update = (req, res) => {

    const { idtpusuario } = req.params;
    const nueva_tipousuario = req.body;

    req.getConnection((err, conn) => {
        conn.query('update tipousuario set ? where idtpusuario =?', [nueva_tipousuario, idtpusuario], (err, rows) => {
            res.json({ message: "Registro Actualizado" });

        });
    });
};

controller.delete = (req, res) => {
    const { idtpusuario } = req.params;
    req.getConnection((err, conn) => {
        // Cambiamos 'delete' por 'update' para que el registro permanezca
        const query = 'UPDATE tipousuario SET estado = "Inactivo" WHERE idtpusuario = ?';
        
        conn.query(query, [idtpusuario], (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};


module.exports = controller;
