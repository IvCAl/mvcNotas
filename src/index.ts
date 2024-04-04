import bodyParser from "body-parser"
import express from "express"
import router from "./rutes/nota/ruta.nota"


const  app = express()
app.use(bodyParser.json())

app.use(router)

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})