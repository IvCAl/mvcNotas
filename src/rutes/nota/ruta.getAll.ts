const expressG = require('express');
const routerGetAll = expressG.Router();

routerGetAll.get('/getAll', (req: any, res: any) => {
    res.send("HOLA")
});

module.exports = routerGetAll;
