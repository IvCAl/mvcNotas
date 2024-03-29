"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tnote_1 = require("../../types/Tnote");
const controllerDelete = {};
controllerDelete.delete = function (req, res) {
    let notaAux = req.body;
    if (!notaAux || !notaAux.id || !notaAux.detalles.nombre || !notaAux.detalles.descripcion) {
        return res.status(400).json({ msg: "Missing fields" });
    }
    let Nota = (0, Tnote_1.createNota)(notaAux.id, notaAux.detalles.nombre, notaAux.detalles.descripcion);
    console.log(Nota);
    (0, Tnote_1.deleteNota)(Nota);
    console.log(Nota);
    res.send("Nota Eliminada");
};
module.exports = controllerDelete;