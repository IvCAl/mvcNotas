import Mongoose,{ Schema,model,InferSchemaType  } from "mongoose";
import {Tnota} from "../types/Tnote";

const connectionString="mongodb+srv://shaggy:1234@prueba.ugikfwh.mongodb.net/notas?retryWrites=true&w=majority&appName=Pruebaa"

Mongoose.connect(connectionString)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.error(`Could not connect to MongoDB: ${err}`)
});

export function desconectar(){
    Mongoose.connection.close()
    .then(()=>{
        console.log('Closed connection')
    })
    .catch((err)=>{
        console.log(`Error closing the connection: ${err}`);
    })
}


const notaSchema=new Schema({
    idNota:{type:Number,required:true,unique:true},
    detalles:{type:Object, required:true},
    fecha:{ type:Object, required:true},
    delete:{type: Boolean, default:false}
})

const notaModel= model<Tnota>('Prueba', notaSchema);

export default notaModel