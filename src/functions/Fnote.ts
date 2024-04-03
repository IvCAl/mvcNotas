import { FechaNota,Detalle,Tnota } from "../types/Tnote"

export let notas:Tnota[]=[]
let notaVacia:Tnota={
    id:"",
    detalles:createDetalle("",""),
    fecha:createDate(),
    delete:false
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

function createDate(): FechaNota{
    let  fechaCreate:Date =new Date(Date.now())
    let fechaUpdate:Date= new Date(Date.now())
    let fecha:FechaNota= {fechaCreate,fechaUpdate}
    return fecha
}
function createDetalle(nombre:string,descripcion:string):Detalle {
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
function isIdInArray(notas:Tnota[],id:string):boolean{
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

//CREAR NOTA
export function createNota(idd:string,nombre:string,descripcion:string){
    if (!idd || typeof idd != 'string' )
        throw ('No se ha proporcionado el ID de la nota o este no es una cadena de texto');
    else{
        let id=parseString(idd)
        id =id.replace(/\s/g, "");
        if (id!=""){
            if (!isIdInArray(notas,id)){
                let fecha=createDate()
                let detalles=createDetalle(nombre,descripcion)
                
                const nota:Tnota={id,detalles,fecha,delete:false}
                console.log("Nota Creada")
                notas.push(nota)
            }
            else
                throw ("ID YA EN USO")
        }
        else
            throw ('No se admite ID vacia')
    }
        
}

//CAMBIAR RESOLVE
function _changeResolve(nota:Tnota,resolve:boolean){
    nota.detalles.resolve=parseBoolean(resolve)
    updateFecha(nota)
}
export function changeResolve(notas:Tnota[],id:string,resolve:boolean){
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                _changeResolve(notas[nota],resolve)
                b=true
            }
        }
        if(b)
            console.log("Resolve Cambiado")
        else
        console.log("No se encontro la Nota")
} catch (error) {
    console.log(error);
}
}

//CAMBIAR DESCRIPCION
function _changeDescripcion(nota:Tnota,descripcion:string){
    nota.detalles.descripcion = parseString(descripcion)
    updateFecha(nota)
}
export function changeDescripcion(notas:Tnota[],id:string,descripcion:string){
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                _changeDescripcion(notas[nota],descripcion)
                b=true
            }
        }
        if(b)
            console.log("Descripcion Cambiada")
        else
            console.log("No se encontro la Nota")
    } catch (error) {
        console.log(error);
    }
}

//CAMBIAR NOMBRE
function _changeNombre(nota:Tnota, nombre:string) {
    nota.detalles.nombre= parseString(nombre)
    updateFecha(nota)
}
export function changeNombre(notas:Tnota[],id:string,nombre:string){
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                _changeNombre(notas[nota],nombre)
                b=true
            }
        }
        if(b)
        console.log("Nombre Cambiado")
    else
    console.log("No se encontro la Nota")
} catch (error) {
    console.log(error);
    }
}

//ELIMINAR NOTA / CAMBIAR DELETE
function _deleteNota(nota:Tnota){
    nota.delete=true
    updateFecha(nota)
}
export function deleteNota(notas:Tnota[], id: string){
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                _deleteNota(notas[nota])
                b=true
            }
        }
        if(b)
            console.log("Nota Eliminada")
        else
            console.log("No se encontro la Nota")
    } catch (error) {
        console.log(error);
    }   
}

export function getById(notas:Tnota[],id:string): Tnota{
    try {
        id=parseString(id)
        let b=false
        for (let nota in notas){
            if  (haveThisId(notas[nota],id)){
                notaVacia=notas[nota]
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

export function getAll(notas:Tnota[]):Tnota[]{
    if (notas.length===0)
        throw ("No hay notas guardadas aun.")
    else{
        console.log("Se envio todas las notas");
        return notas;
    }
}