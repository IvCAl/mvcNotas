"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fnote_1 = require("../../functions/Fnote");
const Fnote_2 = require("../../functions/Fnote");
const controllerNote = {};
controllerNote.create = function (req, res) {
    let notaAux = req.body;
    if (!notaAux || !notaAux.id || !notaAux.detalles.nombre || !notaAux.detalles.descripcion) {
        return res.status(400).json({ msg: "Missing fields" });
    }
    let Nota = (0, Fnote_1.createNota)(notaAux.id, notaAux.detalles.nombre, notaAux.detalles.descripcion);
    Fnote_2.notas.push(Nota);
    console.log(Nota);
    res.send("Nota Creada");
};
controllerNote.delete = function (req, res) {
    let notaAux = req.body;
    if (!notaAux || !notaAux.id) {
        return res.status(400).json({ msg: "Missing fields" });
    }
    res.send("Nota Eliminada");
};
module.exports = controllerNote;
