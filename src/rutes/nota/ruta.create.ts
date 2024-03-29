const expressC = require('express');
const routerCreate = expressC.Router();

const controllerCreate = require('../../controllers/nota/controller.create')

routerCreate.post('/create', controllerCreate.create)

module.exports = routerCreate;
