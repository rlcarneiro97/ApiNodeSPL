const mongoose = require("mongoose")
const User = mongoose.model("Usuario")

module.exports = {

    //mostra um usuario em especifico
    async show(req, res){
        const User = await User.findById(req.params.id)
        return res.json(User)
    },

    //cria um novo usuario
    async store(req, res){
        const User = await User.create(req.body)
        return res.json(User)
    },

    //atualiza um usuario existente
    async update(req, res){
        const User = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(User)
    },

    //deleta um usuario
    async destroy(req, res){
        await User.findByIdAndRemove(req.params.id)
        return res.send()
    }
}