type FechaNota={
    FechaCreate: Date
    FechaUpdate: Date
}
type Detalle={
    nombre: string
    descripcion: string 
    resolve: boolean
}
type Tnote={
    id:string
    detalles: Detalle
    fecha:FechaNota
    delete:boolean
}
function isString(str:any):boolean{
    return (typeof str === "string")
}
function isBoolean(bool: any):boolean{
    return typeof bool ==="boolean"
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
    const fecha:FechaNota
    fech=new Date(Date.now()).getTime();
    fecha.FechaCreate = fech
    fecha.FechaUpdate = fech
    return fecha
}
function createDetalle(nombre:string,descripcion:string):Detalle {
    nName=parseString(name)
    ndescription=parseString(description)
    resolve=false
    const detalle:Detalle={nName,ndescription,resolve}
    return detalle;
}
function updateFecha(nota: Tnote) {
    nota.fecha.FechaUpdate=new Date(Date.now()).getTime()
} 
export function createNota(id:string,nombre:string,descripcion:string):Tnote{
    const fecha=createDate()
    const detalle=createDetalle(nombre,descripcion)
    nId=parseString(id)
    const nota:Tnota={nId,detalle,fecha,delete:false}
    return nota
}


export function resolveNota(nota:Tnote,resolve:boolean){
    nota.detalles.resolve=parseBoolean(resolve)
    updateFecha(nota)
}

export function changeDescripcion(nota:Tnote,descripcion:string){
    nota.detalles.descripcion = parseString(descripcion)
    updateFecha(nota)
}
export function changeNombre(nota:Tnote, nombre:string) {
    nota.detalles.nombre= parseString(nombre)
    updateFecha(nota)
}
export function deleteNota(nota:Tnote){
    nota.delete=true
    updateFecha(nota)
}
