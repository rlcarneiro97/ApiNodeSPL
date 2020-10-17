const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CarrinhoSchema = new mongoose.Schema({

    listaLanches:{
        type: [Object],
        required: true,
    },
    
    status:{
        type: String,
        required: true,
    },

    observação:{
        type: String,
        required: false,
    },

    userId:{
        type: String,
        required: true,
    },
    
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//apontar que esse schema usa paginacao
CarrinhoSchema.plugin(mongoosePaginate)

//criando schema de Carrinho
mongoose.model("Carrinho", CarrinhoSchema)