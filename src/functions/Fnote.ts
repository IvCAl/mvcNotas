import { FechaNota,Detalle,Tnota } from "../types/Tnote"
import notaModel, { desconectar } from "../database/mongo";

const notas:Tnota[]=[]

const notaVacia:Tnota={
    id:"",
    detalles:createDetalle("",""),
    fecha:createDate(),
    delete:false
}

export function createNotaDB(id:string,nombre:string,descripcion:string){
    id=parseString(id)
    id =id.replace(/\s/g, "");
    if (id!=""){
        let nuevaNota=new notaModel({
            _id:id,
            detalles:createDetalle(nombre, descripcion),
            fecha:createDate(),
            delete:false
        })
        
        return nuevaNota.save()
        .then(()=>console.log(`Se ha creado la nota con el ID ${nuevaNota._id}`))
        .catch((error)=> console.log('Error al guardar en BD', error));
    }
    else{
        throw ("NO SE ADMITE ID VACIA")
    }  
    //desconectar()
}


//CREAR NOTA
export function createNota(idd:string,nombre:string,descripcion:string){
    if (!idd || typeof idd != 'string' )
        throw ('No se ha proporcionado el ID de la nota o este no es una cadena de texto');
    else{
        let id=parseString(idd)
        id =id.replace(/\s/g, "");
        if (id!=""){
            if (!isIdInArray(id)){
                let fecha=createDate()
                let detalles=createDetalle(nombre,descripcion)
                let nuevaNota:Tnota={id:id,detalles:detalles,fecha:fecha,delete:false}
                console.log("Nota Creada")
                
                notas.push(nuevaNota)
                console.log(notas)
               
            }
            else
            throw ("ID YA EN USO")
        }
        else
            throw ('No se admite ID vacia')
    }
        
}

//UPDATE NOTA
export function updateNota(id:string,nombre?:string,descripcion?:string,resolve?:boolean){
    try {
        id=parseString(id)
        let flag=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                if (nombre){
                    notas[nota].detalles.nombre=parseString(nombre)
                    console.log("Nombre Cambiado")
                }
                if (descripcion){
                    notas[nota].detalles.descripcion=parseString(descripcion)
                    console.log("Descripcion Cambiada")
                }
                if (resolve){
                    notas[nota].detalles.resolve=parseBoolean(resolve)
                    console.log("Resolve Cambiado")
                }
                updateFecha(notas[nota])
                flag=true
            }
        }
        if(!flag)
            console.log("No se encontro la Nota")
    } catch (error) {
        console.log(error);
    }
    
}
//ELIMINAR NOTA / CAMBIAR DELETE

export function deleteNota(id: string){
    try {
        id=parseString(id)
        let flag=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                notas[nota].delete=true
                updateFecha(notas[nota])
                flag=true
            }
        }
        if(flag)
            console.log("Nota Eliminada")
        else
        console.log("No se encontro la Nota")
    } catch (error) {
        console.log(error);
    }   
}

//GET BY ID
export function getById(id:string): Tnota{
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                //notaVacia=notas[nota]
                b=true
            }
        }
        if(b){
            console.log("Nota enviada")
            return notaVacia
        }
        else{
            throw ("NO SE ECONTRO LA NOTA")
        }
    } catch (error) {
        throw error
    }   
}

//GET ALL
export function getAll():Tnota[]{
    if (notas.length===0)
        throw ("No hay notas guardadas aun.")
    else{
        console.log("Se envio todas las notas");
        return notas;
    }
}



function isString(str:any):boolean{
    return (typeof str === "string")
}
function isBoolean(bool: any):boolean{
    return typeof bool === "boolean"
}
function parseString(string: any){
    if  (!isString(string))
        throw new Error('Dato erroneo, no es un STRING')
    else
    return  string as string
}
function parseBoolean(bool:any){
    if ( !isBoolean(bool))
        throw new Error("Dato erroneo, no es un BOOLEAN")
    else
    return bool as boolean
}

export function createDate(): FechaNota{
    let  fechaCreate:Date =new Date(Date.now())
    let fechaUpdate:Date= new Date(Date.now())
    let fecha:FechaNota= {fechaCreate,fechaUpdate}
    return fecha
}
export function createDetalle(nombre:string,descripcion:string):Detalle {
    nombre=parseString(nombre)
    descripcion=parseString(descripcion)
    let resolve=false
    let detalle:Detalle={nombre,descripcion,resolve}
    return detalle;
}
function updateFecha(nota: Tnota) {
    nota.fecha.fechaUpdate=new Date(Date.now())
} 
function haveThisId(nota:Tnota, id: string): boolean {
    if (nota.id == id)
    return true
else
    return false
}
function isIdInArray(id:string):boolean{
    try {
        for (let i in notas){
            if (haveThisId(notas[i],id)){
                return true
            }
        }
        return false
    } catch (error) {
        throw "ARRAY VACIO"
    }
}