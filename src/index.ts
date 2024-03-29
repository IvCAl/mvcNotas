import bodyParser from "body-parser"

const express=require('express')
const  app = express()
app.use(bodyParser.json())

//Rutas

const rutaCreate=require('./rutes/nota/ruta.create')
app.use(rutaCreate)

const rutaDelete=require('./rutes/nota/ruta.delete')
app.use(rutaDelete)

const rutaGetAll=require('./rutes/nota/ruta.getAll')
app.use(rutaGetAll)

const rutaGetById=require('./rutes/nota/ruta.getById')
app.use(rutaGetById)

const rutaUpdate=require('./rutes/nota/ruta.update')
app.use(rutaUpdate)


app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})