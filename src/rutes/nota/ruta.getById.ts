const expressGID = require('express');
const routerGetById = expressGID.Router();

const controllerNoteGId = require('../../controllers/nota/controller.note')

routerGetById.post('/getById', controllerNoteGId.getById)

module.exports = routerGetById;