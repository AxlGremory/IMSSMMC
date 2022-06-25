import {Schema,model} from "mongoose"

const EquipoSchema = new Schema({

    NOMBRE: "string",
    MARCA: "string",
    MODELO: "string",
    NS: "string",
    NNS: "string",
    GARANTIA: "string",
    PROVEDOR: "string",
    CONTACTO: "string",
    AREA: "string",
    STATUS: "string"


})

export default model('Equipo', EquipoSchema);