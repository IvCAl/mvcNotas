"use strict";
const expressD = require('express');
const routerDelete = expressD.Router();
const controllerDelete = require('../../controllers/nota/controller.delete');
//Uso un post porque no almaceno aun una nota para poder eliminarla
routerDelete.post('/delete', controllerDelete.delete);
module.exports = routerDelete;
