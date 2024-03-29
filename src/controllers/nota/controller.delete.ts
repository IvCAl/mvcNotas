import { createNota, deleteNota } from "../../types/Tnote";

const controllerDelete:any={}


controllerDelete.delete=function(req:any,res:any){
    let notaAux = req.body;
    if(!notaAux || !notaAux.id||!notaAux.detalles.nombre||!notaAux.detalles.descripcion){
        return res.status(400).json({msg:"Missing fields"});
    }
    let Nota=createNota(notaAux.id,notaAux.detalles.nombre,notaAux.detalles.descripcion)

    console.log(Nota)
    deleteNota(Nota)
    
    console.log(Nota)
    res.send("Nota Eliminada")
}

module.exports=controllerDelete; 