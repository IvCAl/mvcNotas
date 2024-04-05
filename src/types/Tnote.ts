import { Schema } from "mongoose"

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
    idNota:number
    detalles: Detalle
    fecha:FechaNota
    delete:boolean
}
