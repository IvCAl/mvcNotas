import { createNota } from "../../types/Tnote";

const controllerCreate:any={}


controllerCreate.create=function(req:any,res:any){
    let notaAux = req.body;
    if(!notaAux || !notaAux.id||!notaAux.detalles.nombre||!notaAux.detalles.descripcion){
        return res.status(400).json({msg:"Missing fields"});
    }
    let Nota=createNota(notaAux.id,notaAux.detalles.nombre,notaAux.detalles.descripcion)
    console.log(Nota)

    res.send("Nota Creada")
}

module.exports=controllerCreate; 