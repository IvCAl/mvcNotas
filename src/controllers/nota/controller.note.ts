import { updateNota, createNota, deleteNota, getAll, getById } from "../../functions/Fnote";
import { Request, Response } from "express";


export const controllerNote={
    
    getAll:function(req:Request,res:Response){
        const resultado=getAll()
        return res.json(resultado)
        console.log("-----------------------------------------------------------")
    },
    
    getById:function(req:Request,res:Response){
        let fields = req.body
        if(!fields || !fields.id){
            return res.status(400).json({msg:"Missing fields"});
        }
        const resultado=getById(fields.id)
        
        console.log("-----------------------------------------------------------")
        res.json(resultado)
    },
    
    create:function(req:Request,res:Response){
        const fields = req.body

        if(!fields || !fields.id||!fields.nombre||!fields.descripcion){
            return res.status(400).json({msg:"Missing fields"});
        }
        createNota(fields.id,fields.nombre,fields.descripcion)
       
        res.send("NOTA CREADA")
        console.log("-----------------------------------------------------------")
    },
    
    delete:function(req:Request,res:Response){
        let fields = req.body

        if(!fields || !fields.id){
            return res.status(400).json({msg:"Missing fields"});
        }
        deleteNota(fields.id);
        res.send("NOTA ELIMINADA")
        console.log("-----------------------------------------------------------")
    },
    update:function(req:Request,res:Response){
        let fields = req.body

        if((!fields||!fields.id) && (!fields.nombre ||!fields.descripcion||!fields.resolve)){
            return res.status(400).json({msg:"Missing fields"});
        }
        else{
            updateNota(fields.id,fields.nombre,fields.descripcion,fields.resolve)
        }
    
        res.send("NOTA ACTUALIZADA")
        console.log("-----------------------------------------------------------")
    }
}
