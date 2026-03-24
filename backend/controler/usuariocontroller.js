const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if (err) {
                console.error("Error en LIST:", err);
                return res.status(500).json(err);
            }
            res.json(usuarios);
        });
    });
};

controller.edit = (req, res) => {
    const { userid } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario WHERE userid = ?', [userid], (err, usuario) => {
            if (err) {
                console.error("Error en EDIT:", err);
                return res.status(500).json(err);
            }
            res.json(usuario[0]);
        });
    });
};

// MODIFICADO PARA MOSTRAR ERROR EXACTO
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.status(500).json(err);

        conn.query('INSERT INTO usuario SET ?', [data], (err, result) => {
            if (err) {
                // ESTO SE VERÁ EN TU CONSOLA DE NODE.JS
                console.log("--- ERROR AL INSERTAR USUARIO ---");
                console.error("Código:", err.code);
                console.error("Mensaje:", err.sqlMessage);
                console.error("Data enviada:", data);
                console.log("---------------------------------");

                return res.status(500).json({
                    success: false,
                    message: "Error en base de datos",
                    details: err.sqlMessage
                });
            }
            res.json({ success: true, result });
        });
    });
};

controller.update = (req, res) => {
    const { userid } = req.params;
    const nueva_usuario = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuario SET ? WHERE userid = ?', [nueva_usuario, userid], (err, rows) => {
            if (err) {
                console.error("Error en UPDATE:", err);
                return res.status(500).json(err);
            }
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { userid } = req.params;
    req.getConnection((err, conn) => {
        const query = 'UPDATE usuario SET estado = "Inactivo" WHERE userid = ?';
        conn.query(query, [userid], (err, rows) => {
            if (err) {
                console.error("Error en DELETE:", err);
                return res.status(500).json(err);
            }
            res.json({ message: "Registro marcado como Inactivo correctamente" });
        });
    });
};

module.exports = controller;