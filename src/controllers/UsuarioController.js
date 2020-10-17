const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")

module.exports = {

    //lista lanche com paginacao PARA TESTES
    async index(req, res){
        const {page = 1} = req.query
        const user = await Usuario.paginate({}, {page, limit: 6})
        return res.json(user)
    },

    //mostra um usuario em especifico
    async show(req, res){
        const user = await Usuario.findById(req.params.id)
        return res.json(user)
    },

    //cria um novo usuario
    async store(req, res){
        const user = await Usuario.create(req.body)
        return res.json(user)
    },

    //atualiza um usuario existente
    async update(req, res){
        const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(user)
    },

    //deleta um usuario
    async destroy(req, res){
        await Usuario.findByIdAndRemove(req.params.id)
        return res.send()
    }
}