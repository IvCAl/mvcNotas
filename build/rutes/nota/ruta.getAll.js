"use strict";
const expressG = require('express');
const routerGetAll = expressG.Router();
routerGetAll.get('/getAll', (req, res) => {
    res.send("HOLA");
});
module.exports = routerGetAll;
