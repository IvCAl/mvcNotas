export type FechaNota={
    fechaCreate: Date
    fechaUpdate: Date
}
export type Detalle={
    nombre: string
    descripcion: string 
    resolve: boolean
}
export type Tnota={
    id:string
    detalles: Detalle
    fecha:FechaNota
    delete:boolean
}