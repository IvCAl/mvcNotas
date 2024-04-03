const expressC = require('express');
const routerCreate = expressC.Router();

const controllerNoteC = require('../../controllers/nota/controller.note')

routerCreate.post('/create',controllerNoteC.create)

module.exports = routerCreate;
