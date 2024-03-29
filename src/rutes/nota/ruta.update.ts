const expressU = require('express');
const routerUpdate = expressU.Router();

const controllerNoteU = require('../../controllers/nota/controller.note')

routerUpdate.post('/update', controllerNoteU.update)

module.exports = routerUpdate;