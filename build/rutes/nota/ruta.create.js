"use strict";
const expressC = require('express');
const routerCreate = expressC.Router();
const controllerNote = require('../../controllers/nota/controller.note');
routerCreate.post('/create', controllerNote.create);
module.exports = routerCreate;
