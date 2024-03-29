import { addNota, changeDescripcion, changeNombre, changeResolve, createNota, deleteNota, getAll, getById } from "../../functions/Fnote";
import { notas } from "../../functions/Fnote";


const controllerNote:any={}

controllerNote.getAll=function(req:any,res:any){
    
    
    res.send(getAll(notas))
    console.log("-----------------------------------------------------------")
}

controllerNote.getById=function(req:any,res:any){
    let notaAux = req.body;
    if(!notaAux || !notaAux.id){
        return res.status(400).json({msg:"Missing fields"});
    }
    let Nota=getById(notas,notaAux.id)
    
    console.log("-----------------------------------------------------------")
    res.send(Nota)
}

controllerNote.create=function(req:any,res:any){
    let notaAux = req.body;
    if(!notaAux || !notaAux.id||!notaAux.detalles.nombre||!notaAux.detalles.descripcion){
        return res.status(400).json({msg:"Missing fields"});
    }
    let Nota=createNota(notaAux.id,notaAux.detalles.nombre,notaAux.detalles.descripcion)
    addNota(notas,Nota)
    
    console.log("-----------------------------------------------------------")
    res.send(notas)
}

controllerNote.delete=function(req:any,res:any){
    let notaAux = req.body;
    if(!notaAux || !notaAux.id){
        return res.status(400).json({msg:"Missing fields"});
    }
    deleteNota(notas,notaAux.id);
    

    res.send(notas)
    console.log("-----------------------------------------------------------")
}
controllerNote.update=function(req:any,res:any){
    let notaAux = req.body;
    if((!notaAux||!notaAux.id) && (!notaAux.detalles.nombre ||!notaAux.detalles.descripcion||!notaAux.detalles.resolve)){
        return res.status(400).json({msg:"Missing fields"});
    }
    else{
        if(notaAux.detalles.nombre)
            changeNombre(notas,notaAux.id,notaAux.detalles.nombre);
        if(notaAux.detalles.descripcion)
            changeDescripcion(notas,notaAux.id,notaAux.detalles.descripcion);
        if(notaAux.detalles.resolve)
            changeResolve(notas,notaAux.id,notaAux.detalles.resolve);
    }
    res.send(notas)
    console.log("-----------------------------------------------------------")
}

module.exports=controllerNote; 