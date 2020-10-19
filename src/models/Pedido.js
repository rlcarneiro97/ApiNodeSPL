const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const PedidoSchema = new mongoose.Schema({

    listaPedido:{
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
PedidoSchema.plugin(mongoosePaginate)

//criando schema de Pedido
mongoose.model("Pedido", PedidoSchema)