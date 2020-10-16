const mongoose = require("mongoose")
const Lanche = mongoose.model("Lanche")

module.exports = {
    
    //lista lanche com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const Lanche = await Lanche.paginate({}, {page, limit: 6})
        return res.json(Lanche)
    },

    //mostra um lanche em especifico
    async show(req, res){
        const Lanche = await Lanche.findById(req.params.id)
        return res.json(Lanche)
    },

    //cria um novo lanche
    async store(req, res){
        const Lanche = await Lanche.create(req.body)
        return res.json(Lanche)
    },

    //atualiza um lanche existente
    async update(req, res){
        const Lanche = await Lanche.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(Lanche)
    },

    //deleta um lanche
    async destroy(req, res){
        await Lanche.findByIdAndRemove(req.params.id)
        return res.send()
    }
}