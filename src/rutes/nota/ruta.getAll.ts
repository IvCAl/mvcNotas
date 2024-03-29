const expressG = require('express');
const routerGetAll = expressG.Router();

const controllerNoteGAll = require('../../controllers/nota/controller.note')

routerGetAll.get('/getAll', controllerNoteGAll.getAll)


module.exports = routerGetAll;
