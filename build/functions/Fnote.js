"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getById = exports.deleteNota = exports.updateNota = exports.createNota = void 0;
const notas = [];
const notaVacia = {
    id: "",
    detalles: createDetalle("", ""),
    fecha: createDate(),
    delete: false
};
//CREAR NOTA
function createNota(idd, nombre, descripcion) {
    if (!idd || typeof idd != 'string')
        throw ('No se ha proporcionado el ID de la nota o este no es una cadena de texto');
    else {
        let id = parseString(idd);
        id = id.replace(/\s/g, "");
        if (id != "") {
            if (!isIdInArray(id)) {
                let fecha = createDate();
                let detalles = createDetalle(nombre, descripcion);
                let nuevaNota = { id: id, detalles: detalles, fecha: fecha, delete: false };
                console.log("Nota Creada");
                notas.push(nuevaNota);
                console.log(notas);
            }
            else
                throw ("ID YA EN USO");
        }
        else
            throw ('No se admite ID vacia');
    }
}
exports.createNota = createNota;
//UPDATE NOTA
function updateNota(id, nombre, descripcion, resolve) {
    try {
        id = parseString(id);
        let flag = false;
        for (let nota in notas) {
            if (haveThisId(notas[nota], id)) {
                if (nombre) {
                    notas[nota].detalles.nombre = parseString(nombre);
                    console.log("Nombre Cambiado");
                }
                if (descripcion) {
                    notas[nota].detalles.descripcion = parseString(descripcion);
                    console.log("Descripcion Cambiada");
                }
                if (resolve) {
                    notas[nota].detalles.resolve = parseBoolean(resolve);
                    console.log("Resolve Cambiado");
                }
                updateFecha(notas[nota]);
                flag = true;
            }
        }
        if (!flag)
            console.log("No se encontro la Nota");
    }
    catch (error) {
        console.log(error);
    }
}
exports.updateNota = updateNota;
//ELIMINAR NOTA / CAMBIAR DELETE
function deleteNota(id) {
    try {
        id = parseString(id);
        let flag = false;
        for (let nota in notas) {
            if (haveThisId(notas[nota], id)) {
                notas[nota].delete = true;
                updateFecha(notas[nota]);
                flag = true;
            }
        }
        if (flag)
            console.log("Nota Eliminada");
        else
            console.log("No se encontro la Nota");
    }
    catch (error) {
        console.log(error);
    }
}
exports.deleteNota = deleteNota;
//GET BY ID
function getById(id) {
    try {
        id = parseString(id);
        let b = false;
        for (let nota in notas) {
            if (haveThisId(notas[nota], id)) {
                //notaVacia=notas[nota]
                b = true;
            }
        }
        if (b) {
            console.log("Nota enviada");
            return notaVacia;
        }
        else {
            throw ("NO SE ECONTRO LA NOTA");
        }
    }
    catch (error) {
        throw error;
    }
}
exports.getById = getById;
//GET ALL
function getAll() {
    if (notas.length === 0)
        throw ("No hay notas guardadas aun.");
    else {
        console.log("Se envio todas las notas");
        return notas;
    }
}
exports.getAll = getAll;
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
function haveThisId(nota, id) {
    if (nota.id == id)
        return true;
    else
        return false;
}
function isIdInArray(id) {
    try {
        for (let i in notas) {
            if (haveThisId(notas[i], id)) {
                return true;
            }
        }
        return false;
    }
    catch (error) {
        throw "ARRAY VACIO";
    }
}
