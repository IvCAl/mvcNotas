"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notaDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
const express = require('express');
const app = express();
app.use(body_parser_1.default.json());
//Rutas
const rutaCreate = require('./rutes/nota/ruta.create');
app.use(rutaCreate);
const rutaDelete = require('./rutes/nota/ruta.delete');
app.use(rutaDelete);
const rutaGetAll = require('./rutes/nota/ruta.getAll');
app.use(rutaGetAll);
const rutaGetById = require('./rutes/nota/ruta.getById');
app.use(rutaGetById);
const rutaUpdate = require('./rutes/nota/ruta.update');
app.use(rutaUpdate);
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
