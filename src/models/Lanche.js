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
    
    precoUnitario:{
        type: Number,
        required: true,
    },

    imgUrl:{
        type: String,
        required:true,
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