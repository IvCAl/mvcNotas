type Tnote={
    id:number
    name:string
    description:string
    resolve:boolean
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

export function  createNote(name:any,description:string):Tnote{
    const note:Tnote
    id=new Date(Date.now()).getTime();
    nName=parseString(name)
    ndescription=parseString(description)
    resolve=false
    return note={id,nName,nDescription,resolve}
}
export function resolveNote(note:Tnote,data:any){
    note.resolve=parseBoolean(data)
}
export function changeDescription(note:Tnote,data:any){
    note.description = parseString(data)
}
export function changeName(note:Tnote, data:any) {
    note.description= parseString(data)
}
