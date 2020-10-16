const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const LancheSchema = new mongoose.Schema({
    
    nome:{
        type: String,
        required: true,
    },
    
    descricao:{
        type: String,
        required: true,
    },
    
    quantidade:{
        type: Number,
        required: true,
    },
    
    preco:{
        type: Number,
        required: true,
    },
    
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//apontar que esse schema usa paginacao
LancheSchema.plugin(mongoosePaginate)

//criando schema de Lanche
mongoose.model("Lanche", LancheSchema)