"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.haveThisId = exports.changeNombre = exports.changeDescripcion = exports.resolveNota = exports.createNota = exports.notas = void 0;
function isString(str) {
    return (typeof str === "string");
}
function isBoolean(bool) {
    return typeof bool === "boolean";
}
function parseString(string) {
    if (!isString(string))
        throw new Error('Dato erroneo, no es un STRING');
    else
        return string;
}
function parseBoolean(bool) {
    if (!isBoolean(bool))
        throw new Error("Dato erroneo, no es un BOOLEAN");
    else
        return bool;
}
function createDate() {
    let fechaCreate = new Date(Date.now());
    let fechaUpdate = new Date(Date.now());
    let fecha = { fechaCreate, fechaUpdate };
    return fecha;
}
function createDetalle(nombre, descripcion) {
    nombre = parseString(nombre);
    descripcion = parseString(descripcion);
    let resolve = false;
    let detalle = { nombre, descripcion, resolve };
    return detalle;
}
function updateFecha(nota) {
    nota.fecha.fechaUpdate = new Date(Date.now());
}
function deleteNota(nota) {
    nota.delete = true;
    updateFecha(nota);
}
function createNota(idd, nombre, descripcion) {
    let fecha = createDate();
    let detalles = createDetalle(nombre, descripcion);
    let id = parseString(idd);
    const nota = { id, detalles, fecha, delete: false };
    return nota;
}
exports.createNota = createNota;
function resolveNota(nota, resolve) {
    nota.detalles.resolve = parseBoolean(resolve);
    updateFecha(nota);
}
exports.resolveNota = resolveNota;
function changeDescripcion(nota, descripcion) {
    nota.detalles.descripcion = parseString(descripcion);
    updateFecha(nota);
}
exports.changeDescripcion = changeDescripcion;
function changeNombre(nota, nombre) {
    nota.detalles.nombre = parseString(nombre);
    updateFecha(nota);
}
exports.changeNombre = changeNombre;
function haveThisId(nota, id) {
    if (nota.id == id)
        return true;
    else
        return false;
}
exports.haveThisId = haveThisId;
function deleteById(notas, id) {
    for (let nota in notas) {
        if (haveThisId(notas[nota], id))
            deleteNota(notas[nota]);
    }
}
exports.deleteById = deleteById;
