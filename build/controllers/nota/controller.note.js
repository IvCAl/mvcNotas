"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerNote = void 0;
const Fnote_1 = require("../../functions/Fnote");
exports.controllerNote = {
    getAll: function (req, res) {
        const resultado = (0, Fnote_1.getAll)();
        return res.json(resultado);
        console.log("-----------------------------------------------------------");
    },
    getById: function (req, res) {
        let fields = req.body;
        if (!fields || !fields.id) {
            return res.status(400).json({ msg: "Missing fields" });
        }
        const resultado = (0, Fnote_1.getById)(fields.id);
        console.log("-----------------------------------------------------------");
        res.json(resultado);
    },
    create: function (req, res) {
        const fields = req.body;
        if (!fields || !fields.id || !fields.nombre || !fields.descripcion) {
            return res.status(400).json({ msg: "Missing fields" });
        }
        (0, Fnote_1.createNota)(fields.id, fields.nombre, fields.descripcion);
        res.send("NOTA CREADA");
        console.log("-----------------------------------------------------------");
    },
    delete: function (req, res) {
        let fields = req.body;
        if (!fields || !fields.id) {
            return res.status(400).json({ msg: "Missing fields" });
        }
        (0, Fnote_1.deleteNota)(fields.id);
        res.send("NOTA ELIMINADA");
        console.log("-----------------------------------------------------------");
    },
    update: function (req, res) {
        let fields = req.body;
        if ((!fields || !fields.id) && (!fields.nombre || !fields.descripcion || !fields.resolve)) {
            return res.status(400).json({ msg: "Missing fields" });
        }
        else {
            (0, Fnote_1.updateNota)(fields.id, fields.nombre, fields.descripcion, fields.resolve);
        }
        res.send("NOTA ACTUALIZADA");
        console.log("-----------------------------------------------------------");
    }
};
