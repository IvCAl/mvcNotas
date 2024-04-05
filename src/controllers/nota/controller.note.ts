import { updateNota, createNota, deleteNota, getAll, getById, createNotaDB, getAllNotas, getByIdDB,updateDB } from "../../functions/Fnote";
import { Request, response, Response } from "express";


export const controllerNote={
    getByIdDB: async function(req:Request,res:Response){
        let fields = req.body
        if(!fields || !fields.idNota){
            return res.status(400).json({msg:"Missing fields"});
        }
        const resultado= await getByIdDB(fields.idNota) 
        console.log(resultado)
    },
    getDB: async function(res:Response){
        const resultado= await getAllNotas()
        console.log(resultado)
    },
    updateDB: async function(req:Request,res:Response){
        let fields = req.body
        if((!fields||!fields.idNota) && (!fields.nombre ||!fields.descripcion||!fields.resolve)){
            return res.status(400).json({msg:"Missing fields"});
        }
        const resultado= await updateDB(fields.idNota,fields.nombre,fields.descripcion,fields.resolve) 
        console.log(resultado)
    },
    createDB:function(req:Request,res:Response){
        const fields = req.body

        if(!fields|| !fields.idNota ||!fields.nombre||!fields.descripcion){
            return res.status(400).json({msg:"Missing fields"});
        }
        const resultado=createNotaDB(fields.idNota,fields.nombre,fields.descripcion)
        res.send(resultado)
        console.log("-----------------------------------------------------------")
    },
    getAll:function(req:Request,res:Response){
        const resultado=getAll()
        return res.json(resultado)
        console.log("-----------------------------------------------------------")
    },
    
    getById:function(req:Request,res:Response){
        let fields = req.body
        if(!fields || !fields.idNota){
            return res.status(400).json({msg:"Missing fields"});
        }
        const resultado=getById(fields.idNota)
        
        console.log("-----------------------------------------------------------")
        res.json(resultado)
    },
    create:function(req:Request,res:Response){
        const fields = req.body

        if(!fields || !fields.idNota||!fields.nombre||!fields.descripcion){
            return res.status(400).json({msg:"Missing fields"});
        }
        createNota(fields.idNota,fields.nombre,fields.descripcion)
       
        res.send("NOTA CREADA")
        console.log("-----------------------------------------------------------")
    },
    
    delete:function(req:Request,res:Response){
        let fields = req.body

        if(!fields || !fields.idNota){
            return res.status(400).json({msg:"Missing fields"});
        }
        deleteNota(fields.idNota);
        res.send("NOTA ELIMINADA")
        console.log("-----------------------------------------------------------")
    },
    update:function(req:Request,res:Response){
        let fields = req.body

        if((!fields||!fields.idNota) && (!fields.nombre ||!fields.descripcion||!fields.resolve)){
            return res.status(400).json({msg:"Missing fields"});
        }
        else{
            updateNota(fields.idNota,fields.nombre,fields.descripcion,fields.resolve)
        }
    
        res.send("NOTA ACTUALIZADA")
        console.log("-----------------------------------------------------------")
    }
}
