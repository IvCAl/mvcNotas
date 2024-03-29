"use strict";
const expressD = require('express');
const routerDelete = expressD.Router();
const controllerDelete = require('../../controllers/nota/controller.delete');
routerDelete.post('/delete', controllerDelete.delete);
module.exports = routerDelete;
