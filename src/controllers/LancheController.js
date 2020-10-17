const mongoose = require("mongoose")
const Lanche = mongoose.model("Lanche")

module.exports = {
    
    //lista lanche com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const lanche = await Lanche.paginate({}, {page, limit: 6})
        return res.json(lanche)
    },

    //mostra um lanche em especifico
    async show(req, res){
        const lanche = await Lanche.findById(req.params.id)
        return res.json(lanche)
    },

    //cria um novo lanche
    async store(req, res){
        const lanche = await Lanche.create(req.body)
        return res.json(lanche)
    },

    //atualiza um lanche existente
    async update(req, res){
        const lanche = await Lanche.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(lanche)
    },

    //deleta um lanche
    async destroy(req, res){
        await lanche.findByIdAndRemove(req.params.id)
        return res.send()
    }
}