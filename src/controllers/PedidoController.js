const mongoose = require("mongoose")
const Pedido= mongoose.model("Pedido")

module.exports = {
    
    //lista Pedido com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const pedido = await Pedido.paginate({}, {page, limit: 6})
        return res.json(pedido)
    },

    //mostra um Pedido em especifico
    async show(req, res){
        const pedido = await Pedido.findById(req.params.id)
        return res.json(pedido)
    },

    //cria um novo Pedido
    async store(req, res){
        const pedido = await Pedido.create(req.body)
        return res.json(pedido)
    },

    // //atualiza um Pedido existente
    // async update(req, res){
    //     const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true})
    //     return res.json(pedido)
    // },

    //deleta um Pedido
    async destroy(req, res){
        await Pedido.findByIdAndRemove(req.params.id)
        return res.send()
    },
    
    //deleta Pedidos concluidos
    async destroyMany(req, res){
        await Pedido.deleteMany({status: "Concluido"})
        return res.send()
    }
}