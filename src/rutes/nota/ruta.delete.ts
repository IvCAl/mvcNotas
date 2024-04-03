const expressD = require('express');
const routerDelete = expressD.Router();

const controllerNoteD = require('../../controllers/nota/controller.note')

routerDelete.delete('/delete', controllerNoteD.delete)

module.exports = routerDelete;

