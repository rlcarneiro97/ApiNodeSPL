const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const UsuarioSchema = new mongoose.Schema({
    
    nome:{
        type: String,
        required: true,
    },
    
    cpf:{
        type: String,
        required: true,
    },
    
    email:{
        type: String,
        required: true,
    },
    
    senha:{
        type: String,
        required: true,
    },
    
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//apontar que esse schema usa paginacao
UsuarioSchema.plugin(mongoosePaginate)

//criando schema de Usuario
mongoose.model("Usuario", UsuarioSchema)