type FechaNota={
    fechaCreate: Date
    fechaUpdate: Date
}
type Detalle={
    nombre: string
    descripcion: string 
    resolve: boolean
}
type Tnota={
    id:string
    detalles: Detalle
    fecha:FechaNota
    delete:boolean
}
function isString(str:any):boolean{
    return (typeof str === "string")
}
function isBoolean(bool: any):boolean{
    return typeof bool === "boolean"
}
function parseString(string: any){
    if  (!isString(string)) throw new Error('Dato erroneo, no es un STRING')
    else return  string as string
}
function parseBoolean(bool:any){
    if ( !isBoolean(bool))throw new Error("Dato erroneo, no es un BOOLEAN")
    else return bool as boolean
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
export function createNota(idd:string,nombre:string,descripcion:string):Tnota{
    
    let fecha=createDate()
    let detalles=createDetalle(nombre,descripcion)
    let id=parseString(idd)
    const nota:Tnota={id,detalles,fecha,delete:false}
    return nota
}


export function resolveNota(nota:Tnota,resolve:boolean){
    nota.detalles.resolve=parseBoolean(resolve)
    updateFecha(nota)
}

export function changeDescripcion(nota:Tnota,descripcion:string){
    nota.detalles.descripcion = parseString(descripcion)
    updateFecha(nota)
}
export function changeNombre(nota:Tnota, nombre:string) {
    nota.detalles.nombre= parseString(nombre)
    updateFecha(nota)
}
export function deleteNota(nota:Tnota){
    nota.delete=true
    updateFecha(nota)
}

export function haveThisId(nota:Tnota, id: string): boolean {
    if (nota.id == id)
        return true
    else
        return false
}