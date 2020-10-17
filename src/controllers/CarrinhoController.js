const mongoose = require("mongoose")
const Carrinho = mongoose.model("Carrinho")

module.exports = {
    
    //lista Carrinho com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const carrinho = await Carrinho.paginate({}, {page, limit: 6})
        return res.json(carrinho)
    },

    //mostra um Carrinho em especifico
    async show(req, res){
        const carrinho = await Carrinho.findById(req.params.id)
        return res.json(carrinho)
    },

    //cria um novo Carrinho
    async store(req, res){
        const carrinho = await Carrinho.create(req.body)
        return res.json(carrinho)
    },

    //atualiza um Carrinho existente
    async update(req, res){
        const carrinho = await Carrinho.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(carrinho)
    },

    //deleta um Carrinho
    async destroy(req, res){
        await Carrinho.findByIdAndRemove(req.params.id)
        return res.send()
    }
}